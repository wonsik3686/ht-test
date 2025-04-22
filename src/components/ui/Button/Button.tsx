'use client'

import clsx from 'clsx'
import styles from './Button.module.scss'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant: 'primary' | 'secondary' | 'disabled' | 'outline' | 'ghost'
  rounded?: boolean
  className?: string
}

export default function Button({ children, onClick, variant, rounded, className, ...props }: ButtonProps) {
  return (
    <button
      type='button'
      className={clsx(className, styles[variant], styles[rounded ? 'rounded' : ''])}
      onClick={onClick}
      disabled={variant === 'disabled'}
      {...props}
    >
      {children}
    </button>
  )
}
