import { Brain, ChevronRight, Sparkles, X } from 'lucide-react'
import { useAppContext } from '../../context/AppContext'
import { navItems } from '../../data/navigation'

export default function Sidebar() {
  const { mobileMenu, setMobileMenu, page, setPage, navLabel } = useAppContext()
  return (
    <aside className={`${mobileMenu ? 'block' : 'hidden'} absolute inset-y-0 left-0 z-30 w-64 border-r border-slate-200 bg-white p-5 md:relative md:block`}>
      <div className="mb-9 flex items-center gap-3 px-2 pt-2">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-600 text-white"><Brain size={25} /></div>
        <div><h1 className="font-extrabold tracking-tight text-slate-900">CloudReady</h1><p className="text-xs text-slate-500">AI Study Buddy</p></div>
        <button className="ml-auto md:hidden" onClick={() => setMobileMenu(false)} aria-label="Close menu"><X size={18} /></button>
      </div>
      <p className="mb-3 px-3 text-xs font-bold uppercase tracking-wider text-slate-400">Learning space</p>
      <nav className="space-y-1">
        {navItems.map(item => {
          const Icon = item.icon
          return <button key={item.page} onClick={() => { setPage(item.page); setMobileMenu(false) }} className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold transition ${page === item.page ? 'bg-cyan-50 text-cyan-800' : 'text-slate-600 hover:bg-slate-50'}`}>
            <Icon size={19} />{navLabel(item.page)}{page === item.page && <ChevronRight size={16} className="ml-auto" />}
          </button>
        })}
      </nav>
      <div className="mt-10 rounded-2xl bg-slate-900 p-4 text-white">
        <Sparkles size={20} className="mb-3 text-cyan-300" />
        <p className="text-sm font-bold">Small steps, big skills.</p>
        <p className="mt-1 text-xs leading-5 text-slate-300">Keep learning a little every day to prepare for AZ-900.</p>
        <button onClick={() => { setPage('Study Buddy'); setMobileMenu(false) }} className="mt-4 w-full rounded-lg bg-cyan-500 px-3 py-2 text-sm font-bold text-slate-950 hover:bg-cyan-400">Ask the Study Buddy</button>
      </div>
      <p className="mt-6 text-xs leading-5 text-slate-400">Independent learning project. Not affiliated with Microsoft.</p>
    </aside>
  )
}
