import type { ReactNode } from 'react'
import styles from './Badge.module.scss'

interface BadgeProps {
  status: 'in-progress' | 'upcoming' | 'completed'
  children: ReactNode
}

export default function Badge({ status, children }: BadgeProps) {
  return <span className={styles[status]}>{children}</span>
}
