
import { Brain, Send } from 'lucide-react'
import { useAppContext } from '../../context/AppContext'
import type { FormEvent, KeyboardEvent } from 'react'

export default function StudyBuddy() {
  const {
  messages,
  language,
  question,
  setQuestion,
  sendMessage,
  isLoading,
  error,
} = useAppContext()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (question.trim()) {
      void sendMessage(question)
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()

      if (question.trim()) {
        void sendMessage(question)
      }
    }
  }

  const suggestions = [
    'What is cloud computing?',
    'Explain IaaS, PaaS and SaaS',
    'What is an Azure region?',
    'Explain Azure Policy',
  ]

  return (
    <div className="mx-auto flex h-[calc(100vh-130px)] max-w-4xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center gap-3 border-b border-slate-100 p-4 sm:p-5">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-100 text-cyan-800">
          <Brain size={23} />
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="font-bold text-slate-900">
            CloudReady Study Buddy
          </h2>
          <p className="text-xs text-slate-500">
            AI-powered AZ-900 learning assistant
          </p>
        </div>

        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
          AI mode
        </span>
      </div>

      <div className="flex-1 space-y-5 overflow-y-auto p-4 sm:p-6">
        {messages.map((message, i) => (
          <div
            key={i}
            className={`flex gap-3 ${
              message.role === 'user'
                ? 'justify-end'
                : 'justify-start'
            }`}
          >
            {message.role === 'assistant' && (
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-800">
                <Brain size={17} />
              </div>
            )}

            <div
              className={`max-w-[88%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-6 ${
                message.role === 'user'
                  ? 'bg-cyan-700 text-white'
                  : 'border border-slate-100 bg-slate-50 text-slate-700'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        {isLoading && (
  <div className="flex items-center gap-3 text-sm text-slate-500">
    <Brain size={18} className="animate-pulse text-cyan-700" />
    CloudReady is thinking...
  </div>
)}

{error && (
  <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-700">
    {error}
  </p>
)}
      </div>

      {messages.length <= 1 && (
        <div className="px-4 pb-3 sm:px-6">
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
            Try asking
          </p>

          <div className="flex flex-wrap gap-2">
            {suggestions.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => void sendMessage(q)}
                className="rounded-full border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600 hover:border-cyan-400 hover:bg-cyan-50"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="flex items-end gap-2 border-t border-slate-100 p-3 sm:p-4"
      >
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={
            language === 'sw'
              ? 'Uliza swali kuhusu Azure...'
              : 'Ask anything about Azure...'
          }
          rows={1}
          className="max-h-32 min-h-11 flex-1 resize-y rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
        />

        <button
          type="submit"
          disabled={!question.trim() || isLoading}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-700 text-white hover:bg-cyan-800 disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Send message"
        >
          <Send size={18} />
        </button>
      </form>
    </div>
  )
}
