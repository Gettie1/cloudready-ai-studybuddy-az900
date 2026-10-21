import { CheckCircle2 } from 'lucide-react'
import { useAppContext } from '../../context/AppContext'
import { topics } from '../../data/topics'

export default function LearnTopics() {
  const { completed, toggleLesson, sendMessage } = useAppContext()
  return (
    <div className="space-y-6">
      <div><h1 className="text-2xl font-extrabold text-slate-900">Learn Azure fundamentals</h1><p className="mt-2 text-sm text-slate-500">Work through each topic at your own pace. Your lesson checklist is saved in this browser.</p></div>
      {topics.map(topic => { const Icon = topic.icon; return <section key={topic.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white"><div className="flex items-center gap-4 border-b border-slate-100 p-5"><span className={`rounded-xl p-3 ${topic.color}`}><Icon size={24} /></span><div><h2 className="font-bold text-slate-900">{topic.title}</h2><p className="mt-1 text-sm text-slate-500">{topic.subtitle}</p></div></div><div className="divide-y divide-slate-100">{topic.lessons.map(lesson => { const isDone = completed.includes(lesson); return <div key={lesson} className="flex items-center gap-3 p-4 sm:px-5"><button onClick={() => toggleLesson(lesson)} aria-label={`Mark ${lesson} ${isDone ? 'incomplete' : 'complete'}`} className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${isDone ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-slate-300 text-transparent hover:border-cyan-600'}`}><CheckCircle2 size={16} /></button><span className={`flex-1 text-sm ${isDone ? 'text-slate-400 line-through' : 'text-slate-700'}`}>{lesson}</span><button onClick={() => sendMessage(`Explain ${lesson}`)} className="rounded-lg px-3 py-2 text-xs font-bold text-cyan-800 hover:bg-cyan-50">Ask tutor</button></div> })}</div></section> })}
    </div>
  )
}
