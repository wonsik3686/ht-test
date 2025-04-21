'use client'

import clsx from 'clsx'
import styles from './Button.module.scss'

interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
  variant: 'primary' | 'secondary' | 'disabled' | 'outline'
  rounded?: boolean
  className?: string
}

export default function Button({ children, onClick, variant, rounded, className }: ButtonProps) {
  return (
    <button
      type='button'
      className={clsx(styles[variant], styles[rounded ? 'rounded' : ''], className)}
      onClick={onClick}
      disabled={variant === 'disabled'}
    >
      {children}
    </button>
  )
}
