import { AppProvider, useAppContext } from './context/AppContext'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import Dashboard from './components/pages/Dashboard'
import StudyBuddy from './components/pages/StudyBuddy'
import LearnTopics from './components/pages/LearnTopics'
import PracticeQuiz from './components/pages/PracticeQuiz'
import MyProgress from './components/pages/MyProgress'

function AppContent() {
  const { page, mobileMenu, setMobileMenu } = useAppContext()
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 md:flex">
      <Sidebar />
      {mobileMenu && <button aria-label="Close navigation overlay" onClick={() => setMobileMenu(false)} className="fixed inset-0 z-20 bg-slate-950/30 md:hidden" />}
      <div className="min-w-0 flex-1">
        <Header />
        <main className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
          {page === 'Dashboard' && <Dashboard />}
          {page === 'Study Buddy' && <StudyBuddy />}
          {page === 'Learn Topics' && <LearnTopics />}
          {page === 'Practice Quiz' && <PracticeQuiz />}
          {page === 'My Progress' && <MyProgress />}
          <footer className="mt-10 border-t border-slate-200 py-5 text-center text-xs leading-5 text-slate-400">CloudReady AI Study Buddy · Independent, unofficial AZ-900 learning project · Not affiliated with or endorsed by Microsoft.</footer>
        </main>
      </div>
    </div>
  )
}

export default function App() {
  return <AppProvider><AppContent /></AppProvider>
}
