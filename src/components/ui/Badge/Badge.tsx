import styles from '@/components/ui/Badge/Badge.module.scss'
import clsx from 'clsx'
import type { ReactNode } from 'react'

type BadgeProps = {
  status: 'in-progress' | 'upcoming' | 'completed'
  children: ReactNode
  className?: string
}

export default function Badge({ status, children, className }: BadgeProps) {
  return <span className={clsx(styles[status], className)}>{children}</span>
}
