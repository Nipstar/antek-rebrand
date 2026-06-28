import React, { useState, useEffect, useRef } from 'react';
import { X, Send, MessageCircle } from 'lucide-react';
import { ChatMessage } from '../types';
import { CONSTANTS } from '../constants';
import { getStoredConsent } from '../utils/consent';

const CHATBOT_WEBHOOK_URL = import.meta.env.VITE_CHATBOT_WEBHOOK_URL || '';

const CONVERSATION_STARTERS = [
  'How much does it cost?',
  'Can I see a demo?',
  'Does it integrate with my CRM?',
  'How quickly can it be live?',
];

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [startersUsed, setStartersUsed] = useState(false);
  const [sessionId] = useState(() => `${CONSTANTS.SESSION_ID_PREFIX}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const [consentDecided, setConsentDecided] = useState(() =>
    typeof window === 'undefined' ? false : getStoredConsent() !== null
  );
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handler = () => setConsentDecided(true);
    window.addEventListener('consentDecided', handler);
    return () => window.removeEventListener('consentDecided', handler);
  }, []);

  useEffect(() => {
    if (!consentDecided) return;
    const hasVisited = localStorage.getItem(CONSTANTS.CHATBOT_VISITED_KEY);
    if (hasVisited || hasAutoOpened) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      setHasAutoOpened(true);
      localStorage.setItem(CONSTANTS.CHATBOT_VISITED_KEY, 'true');

      const welcomeMessage: ChatMessage = {
        id: `msg_${Date.now()}`,
        sessionId,
        message: CONSTANTS.CHATBOT_WELCOME_MESSAGE,
        timestamp: new Date().toISOString(),
        pageUrl: window.location.href,
        source: CONSTANTS.WEBHOOK_SOURCE_CHATBOT,
        isBot: true,
      };
      setMessages([welcomeMessage]);
    }, CONSTANTS.CHATBOT_AUTO_OPEN_DELAY_MS);

    return () => clearTimeout(timer);
  }, [consentDecided, hasAutoOpened, sessionId]);

  // Listen for custom event to open chatbot
  useEffect(() => {
    const handleOpenChatbot = () => {
      setIsOpen(true);
      if (messages.length === 0) {
        const welcomeMessage: ChatMessage = {
          id: `msg_${Date.now()}`,
          sessionId,
          message: CONSTANTS.CHATBOT_WELCOME_MESSAGE,
          timestamp: new Date().toISOString(),
          pageUrl: window.location.href,
          source: CONSTANTS.WEBHOOK_SOURCE_CHATBOT,
          isBot: true,
        };
        setMessages([welcomeMessage]);
      }
    };

    window.addEventListener('openChatbot', handleOpenChatbot);
    return () => window.removeEventListener('openChatbot', handleOpenChatbot);
  }, [sessionId, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isLoading) {
      inputRef.current?.focus();
    }
  }, [isOpen, isLoading]);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    const userMessage: ChatMessage = {
      id: `msg_${Date.now()}`,
      sessionId,
      message: trimmed,
      timestamp: new Date().toISOString(),
      pageUrl: window.location.href,
      source: CONSTANTS.WEBHOOK_SOURCE_CHATBOT,
      isBot: false,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setStartersUsed(true);
    setIsLoading(true);

    try {
      if (CHATBOT_WEBHOOK_URL) {
        const response = await fetch(CHATBOT_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            sessionId: userMessage.sessionId,
            message: userMessage.message,
            timestamp: userMessage.timestamp,
            pageUrl: userMessage.pageUrl,
            source: userMessage.source,
          }),
        });

        if (response.ok) {
          const responseText = await response.text();

          let data;
          try {
            data = JSON.parse(responseText);

            // Handle array response format from n8n
            if (Array.isArray(data) && data.length > 0) {
              data = data[0];
            }
          } catch {
            data = { output: responseText };
          }

          const botReply: ChatMessage = {
            id: `msg_${Date.now()}`,
            sessionId,
            message: data.output || data.reply || "Thanks for your message! We'll get back to you shortly.",
            timestamp: new Date().toISOString(),
            pageUrl: window.location.href,
            source: CONSTANTS.WEBHOOK_SOURCE_CHATBOT,
            isBot: true,
          };
          setMessages((prev) => [...prev, botReply]);
        } else {
          throw new Error('Webhook failed');
        }
      } else {
        const botReply: ChatMessage = {
          id: `msg_${Date.now()}`,
          sessionId,
          message: `Thanks for reaching out! Our team will respond soon. You can also email us at ${CONSTANTS.CONTACT_EMAIL}`,
          timestamp: new Date().toISOString(),
          pageUrl: window.location.href,
          source: CONSTANTS.WEBHOOK_SOURCE_CHATBOT,
          isBot: true,
        };
        setMessages((prev) => [...prev, botReply]);
      }
    } catch {
      const errorMessage: ChatMessage = {
        id: `msg_${Date.now()}`,
        sessionId,
        message: `Connection error. Please try again or email us at ${CONSTANTS.CONTACT_EMAIL}`,
        timestamp: new Date().toISOString(),
        pageUrl: window.location.href,
        source: CONSTANTS.WEBHOOK_SOURCE_CHATBOT,
        isBot: true,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputMessage);
  };

  const handleStarter = (text: string) => {
    sendMessage(text);
  };

  return (
    <>
      <button
        onClick={() => {
          const next = !isOpen
          setIsOpen(next)
          if (next && messages.length === 0) {
            const welcomeMessage: ChatMessage = {
              id: `msg_${Date.now()}`,
              sessionId,
              message: CONSTANTS.CHATBOT_WELCOME_MESSAGE,
              timestamp: new Date().toISOString(),
              pageUrl: window.location.href,
              source: CONSTANTS.WEBHOOK_SOURCE_CHATBOT,
              isBot: true,
            }
            setMessages([welcomeMessage])
          }
        }}
        className="fixed bottom-8 right-8 w-16 h-16 bg-coral border-2 border-ink shadow-brutal flex items-center justify-center hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150 z-[60] group"
        style={{ bottom: 'calc(5rem + env(safe-area-inset-bottom))' }}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        title={isOpen ? 'Close chat' : 'Chat with us'}
      >
        <div className="relative flex items-center justify-center">
          {isOpen ? (
            <X className="w-8 h-8 text-ink" />
          ) : (
            <>
              <MessageCircle className="w-8 h-8 text-ink" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-ink animate-pulse"></span>
            </>
          )}
        </div>
      </button>

      {isOpen && (
        <div className="fixed bottom-28 left-4 right-4 xl:bottom-28 xl:right-6 xl:left-auto w-auto xl:w-[400px] max-h-[calc(100vh-170px)] xl:h-[600px] bg-ink border-2 border-coral shadow-brutal-chat flex flex-col z-[60]">
          <div className="bg-charcoal border-b-2 border-coral p-4 flex items-center justify-between">
            <div>
              <h3 className="font-display font-extrabold text-xl uppercase text-cream">Antek AI</h3>
              <p className="text-xs text-muted">Always here to help</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-ink">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[70%] p-3 border-2 ${
                    msg.isBot
                      ? 'bg-charcoal border-coral'
                      : 'bg-coral border-ink'
                  }`}
                >
                  <p className={`text-sm leading-normal ${msg.isBot ? 'text-cream' : 'text-ink'}`}>{msg.message}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-charcoal border-2 border-coral p-3">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-coral rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-coral rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-coral rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            {!startersUsed && !isLoading && (
              <div className="pt-1">
                <p className="text-[11px] uppercase tracking-wide text-muted font-bold mb-2">
                  Quick questions
                </p>
                <div className="flex flex-wrap gap-2">
                  {CONVERSATION_STARTERS.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => handleStarter(s)}
                      className="text-left text-xs bg-transparent border-2 border-[rgba(232,220,200,0.18)] text-cream px-3 py-2 hover:border-coral transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="border-t-2 border-hairline p-4 flex gap-2 bg-ink">
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type message..."
              className="flex-1 border-2 border-coral px-3 py-2 bg-ink text-cream placeholder:text-muted focus:border-coral"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !inputMessage.trim()}
              className="bg-coral text-ink px-4 py-2 border-2 border-ink shadow-brutal-xs hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all duration-150 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
