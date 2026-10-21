import { createContext, useContext, useEffect, useState, type Dispatch, type ReactNode, type SetStateAction } from 'react'
import { demoAnswer } from '../data/demoAnswer'
import { quizQuestions } from '../data/quizQuestions'
import { topics } from '../data/topics'
import type { Language, Message, Page } from '../types'

type AppContextValue = {
  page: Page; setPage: Dispatch<SetStateAction<Page>>
  language: Language; setLanguage: Dispatch<SetStateAction<Language>>
  question: string; setQuestion: Dispatch<SetStateAction<string>>
  messages: Message[]; completed: string[]; setCompleted: Dispatch<SetStateAction<string[]>>
  quizIndex: number; selected: number | null; score: number; quizFinished: boolean
  mobileMenu: boolean; setMobileMenu: Dispatch<SetStateAction<boolean>>
  totalLessons: number; progress: number
  sendMessage: (text: string) => void; toggleLesson: (lesson: string) => void
  answerQuiz: (optionIndex: number) => void; nextQuestion: () => void; resetQuiz: () => void
  navLabel: (item: Page) => string
}

const AppContext = createContext<AppContextValue | null>(null)

// The context hook must remain exported from this module for consumers, even
// though the module also exports the provider component.
// eslint-disable-next-line react-refresh/only-export-components
export function useAppContext() {
  const context = useContext(AppContext)
  if (!context) throw new Error('App components must be rendered inside AppProvider')
  return context
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [page, setPage] = useState<Page>('Dashboard')
  const [language, setLanguage] = useState<Language>('en')
  const [question, setQuestion] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hi! I’m your CloudReady Study Buddy. Ask me about Azure and I’ll explain it with simple definitions, African examples and AZ-900 study tips. These are currently demonstration responses, not live AI.' },
  ])
  const [completed, setCompleted] = useState<string[]>(() => {
    try { return JSON.parse(localStorage.getItem('cloudready-completed') || '[]') as string[] } catch { return [] }
  })
  const [quizIndex, setQuizIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [quizFinished, setQuizFinished] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  useEffect(() => { localStorage.setItem('cloudready-completed', JSON.stringify(completed)) }, [completed])

  const totalLessons = topics.reduce((sum, topic) => sum + topic.lessons.length, 0)
  const progress = Math.round((completed.length / totalLessons) * 100)
  const sendMessage = (text: string) => {
    const trimmed = text.trim()
    if (!trimmed) return
    setMessages(current => [...current, { role: 'user', content: trimmed }, { role: 'assistant', content: demoAnswer(trimmed, language) }])
    setQuestion('')
    setPage('Study Buddy')
  }
  const toggleLesson = (lesson: string) => setCompleted(current => current.includes(lesson) ? current.filter(item => item !== lesson) : [...current, lesson])
  const answerQuiz = (optionIndex: number) => {
    if (selected !== null) return
    setSelected(optionIndex)
    if (optionIndex === quizQuestions[quizIndex].answer) setScore(current => current + 1)
  }
  const nextQuestion = () => {
    if (quizIndex + 1 === quizQuestions.length) setQuizFinished(true)
    else { setQuizIndex(current => current + 1); setSelected(null) }
  }
  const resetQuiz = () => { setQuizIndex(0); setSelected(null); setScore(0); setQuizFinished(false) }
  const title = language === 'sw' ? {
    Dashboard: 'Dashibodi', 'Study Buddy': 'Msaidizi wa Masomo', 'Learn Topics': 'Jifunze Mada',
    'Practice Quiz': 'Jaribio la Mazoezi', 'My Progress': 'Maendeleo Yangu',
  } : null
  const navLabel = (item: Page) => title?.[item] ?? item
  const value: AppContextValue = {
    page, setPage, language, setLanguage, question, setQuestion, messages,
    completed, setCompleted, quizIndex, selected, score, quizFinished,
    mobileMenu, setMobileMenu, totalLessons, progress, sendMessage,
    toggleLesson, answerQuiz, nextQuestion, resetQuiz, navLabel,
  }
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
