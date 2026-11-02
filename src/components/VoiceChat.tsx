import { useEffect, useRef, useState } from 'react';
import type { RetellWebClient } from 'retell-client-js-sdk';
import { X, Mic, Phone } from 'lucide-react';

interface VoiceChatProps {
  isOpen: boolean;
  onClose: () => void;
}

type DisplayStatus = 'idle' | 'connecting' | 'connected' | 'speaking' | 'listening' | 'error';

// Retell web call: the browser asks /api/retell-web-call for a session, then
// joins it with RetellWebClient. The API key stays on the server.
export function VoiceChat({ isOpen, onClose }: VoiceChatProps) {
  const clientRef = useRef<RetellWebClient | null>(null);
  const [displayStatus, setDisplayStatus] = useState<DisplayStatus>('idle');

  useEffect(() => {
    if (!isOpen) return;

    let cancelled = false;
    setDisplayStatus('connecting');

    (async () => {
      try {
        const [{ RetellWebClient }, res] = await Promise.all([
          import('retell-client-js-sdk'),
          fetch('/api/retell-web-call', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ page: window.location.pathname }),
          }),
        ]);
        if (cancelled) return;
        if (!res.ok) throw new Error('Could not start the demo call');
        const session = (await res.json()) as {
          call_id: string;
          access_token: string;
          transport?: 'gateway' | 'livekit';
          ice_servers?: RTCIceServer[];
        };

        const client = new RetellWebClient();
        clientRef.current = client;
        client.on('call_started', () => setDisplayStatus('listening'));
        client.on('agent_start_talking', () => setDisplayStatus('speaking'));
        client.on('agent_stop_talking', () => setDisplayStatus('listening'));
        client.on('call_ended', () => setDisplayStatus('idle'));
        client.on('error', () => {
          setDisplayStatus('error');
          client.stopCall();
        });

        await client.startCall({
          accessToken: session.access_token,
          callId: session.call_id,
          transport: session.transport,
          iceServers: session.ice_servers,
          sampleRate: 24000,
        });
      } catch {
        if (!cancelled) setDisplayStatus('error');
      }
    })();

    return () => {
      cancelled = true;
      clientRef.current?.stopCall();
      clientRef.current = null;
      setDisplayStatus('idle');
    };
  }, [isOpen]);

  const handleEndCall = () => {
    clientRef.current?.stopCall();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60] p-4">
      <div className="bg-ink border-2 border-coral shadow-brutal-chat w-full max-w-sm max-h-[600px] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-charcoal border-b-2 border-coral p-4 flex items-center justify-between">
          <div>
            <h3 className="font-display font-extrabold text-xl uppercase text-cream">Voice Demo</h3>
            <p className="text-xs text-muted">
              {displayStatus === 'idle' && 'Ready to start'}
              {displayStatus === 'connecting' && 'Connecting...'}
              {displayStatus === 'connected' && 'Connected'}
              {displayStatus === 'speaking' && 'Agent Speaking'}
              {displayStatus === 'listening' && 'Listening...'}
              {displayStatus === 'error' && 'Connection Error'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-cream hover:bg-coral hover:text-ink transition-colors border-2 border-coral"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center p-6 space-y-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative w-24 h-24 flex items-center justify-center">
              {displayStatus === 'speaking' && (
                <>
                  <div className="absolute inset-0 border-2 border-coral rounded-full animate-pulse" />
                  <div
                    className="absolute inset-2 border-2 border-coral rounded-full animate-pulse"
                    style={{ animationDelay: '0.2s' }}
                  />
                </>
              )}
              {displayStatus === 'listening' && (
                <>
                  <div className="absolute inset-0 border-2 border-sage rounded-full animate-pulse" />
                  <div
                    className="absolute inset-2 border-2 border-sage rounded-full animate-pulse"
                    style={{ animationDelay: '0.2s' }}
                  />
                </>
              )}

              <div
                className={`relative z-10 w-16 h-16 rounded-full border-2 border-ink flex items-center justify-center ${
                  displayStatus === 'speaking'
                    ? 'bg-coral'
                    : displayStatus === 'listening'
                    ? 'bg-sage'
                    : displayStatus === 'connecting'
                    ? 'bg-muted'
                    : displayStatus === 'error'
                    ? 'bg-coral'
                    : 'bg-cream'
                }`}
              >
                {displayStatus === 'error' ? (
                  <span className="text-2xl font-display font-extrabold text-ink">!</span>
                ) : (
                  <Mic className="w-8 h-8 text-ink" />
                )}
              </div>
            </div>

            <div className="text-center">
              <p className="font-display font-extrabold text-cream uppercase text-sm">
                {displayStatus === 'idle' && 'Ready'}
                {displayStatus === 'connecting' && 'Connecting...'}
                {displayStatus === 'connected' && 'Connected - Speak Now'}
                {displayStatus === 'speaking' && 'Agent Speaking'}
                {displayStatus === 'listening' && 'Listening to You'}
                {displayStatus === 'error' && 'Connection Error'}
              </p>
              <p className="text-xs text-muted mt-1">
                {displayStatus === 'listening' && 'Your microphone is active'}
                {displayStatus === 'speaking' && 'The agent is speaking'}
                {displayStatus === 'error' && 'Check your microphone permission and try again'}
              </p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="border-t-2 border-hairline bg-ink p-4 flex gap-3">
          <button
            onClick={handleEndCall}
            className="w-full bg-coral text-ink px-4 py-3 border-2 border-ink shadow-brutal-xs font-sans font-bold uppercase text-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all duration-150 flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>End Call</span>
          </button>
        </div>
      </div>
    </div>
  );
}
