
import {
  BookOpen,
  LayoutDashboard,
  MessageCircle,
  Target,
  TrendingUp,
} from 'lucide-react'

import type { Page } from '../types'

export const navItems: { page: Page; icon: typeof LayoutDashboard }[] = [
  { page: 'Dashboard', icon: LayoutDashboard },
  { page: 'Study Buddy', icon: MessageCircle },
  { page: 'Learn Topics', icon: BookOpen },
  { page: 'Practice Quiz', icon: Target },
  { page: 'My Progress', icon: TrendingUp },
]
