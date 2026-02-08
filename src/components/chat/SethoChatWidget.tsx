import * as React from 'react';
import { getPortfolioAnswer } from '../../chatbot/answer';
import { getSuggestions, Suggestion } from '../../chatbot/suggest';
import knowledge from '../../data/knowledge.json';
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

function getContextualLines(hash: string) {
  if (hash.startsWith('#/about')) {
    return [
      'Curious why this portfolio looks like an EHR?',
      'Want the story behind the design?',
      'Ask me how I think about clinical workflows.',
    ];
  }
  if (hash.startsWith('#/projects')) {
    return [
      'Reviewing projects?',
      'Ask me about outcomes, analytics, or impact.',
      'Want details on PainTools or Health Numerics?',
    ];
  }
  if (hash.startsWith('#/contact')) {
    return [
      'Ready to send a message?',
      'Your note will be securely logged.',
      'Prefer email? You can reach me directly.',
    ];
  }
  // Default (Home/other)
  return [
    'Echo online.',
    'Curious why this portfolio looks like an EHR?',
    'What would you like to review today?',
  ];
}

export default function SethoChatWidget() {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState('');
  const [suggestions, setSuggestions] = React.useState<Suggestion[]>([]);
  const [messages, setMessages] = React.useState<Msg[]>([
    {
      id: uid(),
      role: 'assistant',
      text: 'Echo online. Ask me about projects, skills, or why this portfolio is designed like an EHR, or open my LinkedIn, GitHub, or contact me directly.',
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
    setQuery('');
    setSuggestions([]);

    try {
      const reply = getPortfolioAnswer(trimmed);
      const assistantMsg: Msg = {
        id: uid(),
        role: 'assistant',
        text: reply,
        ts: Date.now(),
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      const assistantMsg: Msg = {
        id: uid(),
        role: 'assistant',
        text: 'Sorry, I couldn’t find that. Try asking about projects, skills, or contact.',
        ts: Date.now(),
      };
      setMessages((prev) => [...prev, assistantMsg]);
      // eslint-disable-next-line no-console
      console.error(err);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send(query);
    }
  }

  function handleSuggestionClick(s: Suggestion) {
    setQuery(s.label);
    send(s.label);
  }

  const quickActions = [
    { label: 'Projects', text: 'What projects have you worked on?' },
    { label: 'Skills', text: 'What are your core skills?' },
    { label: 'Contact', text: 'How can I contact you?' },
    {
      label: 'Resume',
      text: knowledge?.owner?.links?.resume
        ? knowledge.owner.links.resume
        : 'Where is your resume?',
      isLink: Boolean(knowledge?.owner?.links?.resume),
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="relative mb-3 w-[360px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <div className="flex items-start justify-between gap-3 border-b border-slate-100 bg-slate-50 px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="leading-tight">
                <div className="text-base font-bold text-slate-900">Echo</div>
                <div className="text-sm text-slate-500">Your clinical copilot</div>
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

          <div ref={listRef} className="max-h-[320px] overflow-y-auto px-4 py-2">
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
                      'max-w-[85%] rounded-2xl px-3 py-2 text-sm shadow-sm',
                      m.role === 'user'
                        ? 'bg-slate-900 text-white'
                        : 'bg-[#EEF4FF] text-slate-800',
                    ].join(' ')}
                  >
                    <span dangerouslySetInnerHTML={{ __html: m.text }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-100 bg-white p-3">
            <div className="flex items-center gap-2">
              <div className="relative w-full">
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => {
                    const val = e.target.value;
                    setQuery(val);
                    setSuggestions(getSuggestions(val));
                  }}
                  onKeyDown={onKeyDown}
                  placeholder="Ask me anything..."
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-slate-200"
                />
                {open && suggestions.length > 0 && (
                  <div className="absolute left-0 right-0 top-[calc(100%+4px)] z-10 max-h-40 overflow-auto rounded-lg border border-slate-200 bg-white shadow-sm">
                    <ul className="divide-y divide-slate-100">
                      {suggestions.map((s) => (
                        <li
                          key={`${s.kind}-${s.label}`}
                          className="flex items-center justify-between px-3 py-2 text-sm text-slate-800 hover:bg-slate-50 cursor-pointer"
                          onClick={() => handleSuggestionClick(s)}
                        >
                          <span>{s.label}</span>
                          <span className="text-[10px] uppercase tracking-wide text-slate-500">
                            {s.kind}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <button
                type="button"
                onClick={() => send(query)}
                className="h-[42px] shrink-0 rounded-xl bg-[#1E3A5F] px-4 text-sm font-medium text-white hover:bg-[#17324F] transition-colors"
                aria-label="Send message"
                title="Send"
              >
                Send
              </button>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {quickActions.map((action) =>
                action.isLink && typeof action.text === 'string' ? (
                  <a
                    key={action.label}
                    href={action.text}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 hover:bg-[#EEF4FF]"
                  >
                    {action.label}
                  </a>
                ) : (
                  <button
                    key={action.label}
                    type="button"
                    onClick={() => send(action.text)}
                    className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 hover:bg-[#EEF4FF]"
                  >
                    {action.label}
                  </button>
                )
              )}
            </div>
          </div>

        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close Echo chat' : 'Open Echo chat'}
        title="Chat with Echo"
        className="group relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-visible border-0 cursor-pointer transition-transform duration-200 hover:scale-105"
      >
        <div className="relative w-full h-full rounded-full bg-white/15 border border-white/30 backdrop-blur-xl shadow-lg/70 group-hover:shadow-xl transition-all duration-200 flex items-center justify-center">
          <img
            src={sethoBotUrl}
            alt="Echo"
            className="w-[76px] h-[76px] sm:w-[80px] sm:h-[80px] md:w-[88px] md:h-[88px] object-contain pointer-events-none"
          />
        </div>
        <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#2FBF71] rounded-full border-2 border-white shadow-sm" />
      </button>
    </div>
  );
}
