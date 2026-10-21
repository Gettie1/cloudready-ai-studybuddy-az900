import { CheckCircle2, TrendingUp } from 'lucide-react'
import { useAppContext } from '../../context/AppContext'
import { topics } from '../../data/topics'

export default function MyProgress() {
  const { progress, completed, totalLessons, setCompleted } = useAppContext()
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div><h1 className="text-2xl font-extrabold text-slate-900">My learning progress</h1><p className="mt-2 text-sm text-slate-500">Your completed lessons are stored in this browser on this device.</p></div>
      <div className="rounded-2xl border border-slate-200 bg-white p-6"><div className="flex items-center justify-between"><div><p className="text-sm text-slate-500">Overall lesson completion</p><p className="mt-2 text-4xl font-extrabold text-slate-900">{progress}%</p></div><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-800"><TrendingUp size={27} /></div></div><div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-cyan-600 transition-all" style={{ width: `${progress}%` }} /></div><p className="mt-3 text-sm text-slate-500">{completed.length} of {totalLessons} lessons completed</p></div>
      {topics.map(topic => <div key={topic.id} className="rounded-2xl border border-slate-200 bg-white p-5"><div className="flex items-center justify-between gap-3"><h2 className="font-bold text-slate-900">{topic.title}</h2><span className="text-xs font-semibold text-slate-500">{topic.lessons.filter(l => completed.includes(l)).length}/{topic.lessons.length}</span></div><div className="mt-3 space-y-2">{topic.lessons.map(lesson => <div key={lesson} className="flex items-center gap-2 text-sm">{completed.includes(lesson) ? <CheckCircle2 size={16} className="text-emerald-600" /> : <div className="h-4 w-4 rounded-full border border-slate-300" />}<span className={completed.includes(lesson) ? 'text-slate-500' : 'text-slate-700'}>{lesson}</span></div>)}</div></div>)}
      <button onClick={() => { if (window.confirm('Reset all completed lessons?')) setCompleted([]) }} className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50">Reset lesson progress</button>
    </div>
  )
}
