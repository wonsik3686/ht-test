import styles from '@/components/ui/Card/Card.module.scss'
import clsx from 'clsx'

export default function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={clsx(styles.card, className)}>{children}</div>
}
