import { CheckCircle2, ChevronRight, Cloud, GraduationCap, Sparkles, TrendingUp } from 'lucide-react'
import { useAppContext } from '../../context/AppContext'
import { topics } from '../../data/topics'

export default function Dashboard() {
  const { setPage, completed, totalLessons, progress, resetQuiz } = useAppContext()
  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-800 p-7 text-white sm:p-10">
        <div className="relative z-10 max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold"><Sparkles size={14} /> Your AZ-900 learning companion</span>
          <h1 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl">Understand the cloud.<br /><span className="text-cyan-300">Build your future.</span></h1>
          <p className="mt-4 max-w-xl text-sm leading-6 text-blue-100 sm:text-base">Learn Azure fundamentals in simple language with relatable examples and guided practice.</p>
          <button onClick={() => setPage('Study Buddy')} className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-900 hover:bg-cyan-50">Start learning <ChevronRight size={17} /></button>
        </div>
        <Cloud className="absolute -right-5 -top-4 h-56 w-56 text-white/10 sm:right-8 sm:top-5 sm:h-64 sm:w-64" strokeWidth={1} />
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5"><div className="flex items-center justify-between"><span className="text-sm text-slate-500">Lessons completed</span><CheckCircle2 className="text-emerald-600" size={20} /></div><p className="mt-3 text-3xl font-extrabold">{completed.length}<span className="text-base font-medium text-slate-400"> / {totalLessons}</span></p><p className="mt-1 text-xs text-slate-500">Mark lessons complete as you learn</p></div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5"><div className="flex items-center justify-between"><span className="text-sm text-slate-500">Learning progress</span><TrendingUp className="text-cyan-700" size={20} /></div><p className="mt-3 text-3xl font-extrabold">{progress}%</p><div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-cyan-600 transition-all" style={{ width: `${progress}%` }} /></div></div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5"><div className="flex items-center justify-between"><span className="text-sm text-slate-500">Study topics</span><GraduationCap className="text-violet-600" size={21} /></div><p className="mt-3 text-3xl font-extrabold">{topics.length}</p><p className="mt-1 text-xs text-slate-500">Core AZ-900 learning areas</p></div>
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between gap-3"><div><h2 className="text-xl font-extrabold text-slate-900">Your learning path</h2><p className="mt-1 text-sm text-slate-500">Explore the core Azure fundamentals topics.</p></div><button onClick={() => setPage('Learn Topics')} className="text-sm font-bold text-cyan-800 hover:underline">All topics →</button></div>
        <div className="grid gap-4 lg:grid-cols-3">
          {topics.map(topic => { const Icon = topic.icon; return <button key={topic.id} onClick={() => setPage('Learn Topics')} className="rounded-2xl border border-slate-200 bg-white p-5 text-left transition hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-md"><span className={`inline-flex rounded-xl p-3 ${topic.color}`}><Icon size={23} /></span><h3 className="mt-4 font-bold text-slate-900">{topic.title}</h3><p className="mt-2 text-sm leading-5 text-slate-500">{topic.subtitle}</p><div className="mt-4 flex items-center justify-between text-xs font-semibold text-slate-500"><span>{topic.lessons.length} lessons</span><ChevronRight size={16} /></div></button> })}
        </div>
      </section>

      <section className="rounded-2xl border border-cyan-100 bg-cyan-50 p-5 sm:p-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center"><div><p className="text-sm font-bold text-cyan-900">Ready to check your knowledge?</p><p className="mt-1 text-sm text-cyan-800">Try a short practice quiz and learn from every answer.</p></div><button onClick={() => { resetQuiz(); setPage('Practice Quiz') }} className="rounded-xl bg-cyan-700 px-5 py-3 text-sm font-bold text-white hover:bg-cyan-800">Take practice quiz</button></div>
      </section>
    </div>
  )
}
