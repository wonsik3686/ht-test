'use client'

import ScrollToTopButton from '@/components/ui/ScrollToTopButton/ScrollToTopButton'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Contact me</p>
      <p>wonsic3686@gmail.com</p>
      <ScrollToTopButton />
    </footer>
  )
}
