import { Menu, X, Languages } from 'lucide-react'
import { useAppContext } from '../../context/AppContext'
import type { Language } from '../../types'

export default function Header() {
  const { page, navLabel, mobileMenu, setMobileMenu, language, setLanguage } = useAppContext()
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-200 bg-white/95 px-4 py-4 backdrop-blur sm:px-8">
      <div className="flex items-center gap-3">
        <button className="rounded-lg p-2 hover:bg-slate-100 md:hidden" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Toggle menu">
          {mobileMenu ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div>
          <h2 className="text-lg font-bold text-slate-900">{navLabel(page)}</h2>
          <p className="hidden text-xs text-slate-500 sm:block">Your friendly guide to Azure fundamentals</p>
        </div>
      </div>
      <label className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium">
        <Languages size={17} className="text-cyan-700" />
        <select value={language} onChange={e => setLanguage(e.target.value as Language)} className="max-w-24 bg-transparent outline-none" aria-label="Language">
          <option value="en">English</option>
          <option value="sw">Kiswahili</option>
        </select>
      </label>
    </header>
  )
}
