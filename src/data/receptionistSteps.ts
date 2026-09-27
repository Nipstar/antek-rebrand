// The three setup steps for the AI receptionist. Shared by /ai-receptionist
// and /call-answering-service; the HowTo JSON-LD reads the same array.
export const RECEPTIONIST_STEPS = [
  {
    h: 'Tell Us About Your Business',
    b: 'Share your website and phone number. We pull your services, hours, and service areas automatically.',
  },
  {
    h: 'Set Your Screening Logic',
    b: 'What questions should we ask? What qualifies a good lead for you? What’s urgent vs routine? You set the rules. The AI follows them.',
  },
  {
    h: 'Forward Your Calls',
    b: 'Dial a short code or scan a QR. Takes 30 seconds. Your AI receptionist is live — answering calls, screening callers, and booking appointments while you get on with the actual work.',
  },
]
