import * as React from 'react';
import sethoBotUrl from './stethochat.svg';

type Msg = {
  id: string;
  role: 'assistant' | 'user';
  text: string;
  ts: number;
};

function uid() {
  return Math.random().toString(16).slice(2) + Date.now().toString(16);
}

export default function SethoChatWidget() {
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = React.useState('');
  const [messages, setMessages] = React.useState<Msg[]>([
    {
      id: uid(),
      role: 'assistant',
      text: 'Hi there! How can I assist you today?',
      ts: Date.now(),
    },
  ]);

  const listRef = React.useRef<HTMLDivElement | null>(null);
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  React.useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => inputRef.current?.focus(), 50);
    return () => window.clearTimeout(t);
  }, [open]);

  React.useEffect(() => {
    if (!open) return;
    const el = listRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages, open]);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg: Msg = {
      id: uid(),
      role: 'user',
      text: trimmed,
      ts: Date.now(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    window.setTimeout(() => {
      const assistantMsg: Msg = {
        id: uid(),
        role: 'assistant',
        text:
          'Got it. (This is a local demo response - wire me to your backend/API when ready.)',
        ts: Date.now(),
      };
      setMessages((prev) => [...prev, assistantMsg]);
    }, 400);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-3 w-[360px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
          <div className="flex items-start justify-between gap-3 border-b border-slate-100 bg-slate-50 px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="leading-tight">
                <div className="text-sm font-semibold text-slate-900">Setho</div>
                <div className="text-xs text-slate-600">
                  Clinical analytics assistant
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-1 text-slate-500 hover:bg-white hover:text-slate-700"
              aria-label="Close chat"
              title="Close"
            >
              X
            </button>
          </div>

          <div ref={listRef} className="max-h-[320px] overflow-y-auto px-4 py-3">
            <div className="space-y-3">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={[
                    'flex',
                    m.role === 'user' ? 'justify-end' : 'justify-start',
                  ].join(' ')}
                >
                  <div
                    className={[
                      'max-w-[85%] rounded-2xl px-3 py-2 text-sm',
                      m.role === 'user'
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-800',
                    ].join(' ')}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-100 bg-white p-3">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Ask me anything..."
                className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-slate-200"
              />
              <button
                type="button"
                onClick={() => send(input)}
                className="h-10 shrink-0 rounded-xl bg-slate-900 px-4 text-sm font-medium text-white hover:bg-slate-800"
                aria-label="Send message"
                title="Send"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="group relative bg-transparent p-0 rounded-none overflow-visible border-0 cursor-pointer transition-transform duration-200 hover:scale-105"
        aria-label={open ? 'Close Setho chat' : 'Open Setho chat'}
        title={open ? 'Close' : 'Chat with Setho'}
      >
        <div className="relative w-14 sm:w-16 md:w-20 lg:w-[7.5rem] shadow-sm">
          <img
            src={sethoBotUrl}
            className="w-full h-auto object-contain block pointer-events-none"
            alt="Setho"
          />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-emerald-500 ring-1 ring-white" />
        </div>
      </button>
    </div>
  );
}
