
export type Page =
  | 'Dashboard'
  | 'Study Buddy'
  | 'Learn Topics'
  | 'Practice Quiz'
  | 'My Progress'

export type Language = 'en' | 'sw'

export type Message = {
  role: 'user' | 'assistant'
  content: string
}
