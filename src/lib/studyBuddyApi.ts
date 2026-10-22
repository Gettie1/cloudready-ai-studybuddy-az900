
const API_URL = 'http://127.0.0.1:8000'

export type StudyLanguage = 'en' | 'sw'

export async function askStudyBuddy(
  question: string,
  language: StudyLanguage = 'en',
): Promise<string> {
  const response = await fetch(`${API_URL}/api/study`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      question,
      language,
    }),
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(
      data.detail || 'Unable to get an AI response.',
    )
  }

  return data.answer as string
}
