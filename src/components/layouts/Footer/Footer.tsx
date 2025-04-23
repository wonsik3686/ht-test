'use client'

import styles from '@/components/layouts/Footer/Footer.module.scss'
import ScrollToTopButton from '@/components/ui/ScrollToTopButton/ScrollToTopButton'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Contact me</p>
      <p>wonsic3686@gmail.com</p>
      <ScrollToTopButton />
    </footer>
  )
}
