'use client'
import Carousel from '@/components/ui/Carousel/Carousel'
import styles from './styles.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <Carousel />
      <section className={styles.features}>
        <h2>Features</h2>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
      </section>
    </main>
  )
}
