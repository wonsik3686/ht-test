'use client'
import ContentList from '@/components/content/ContentList'
import Carousel from '@/components/ui/Carousel/Carousel'
import { contentListMockData } from '@/mocks/contentListMockData'
import styles from './styles.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <Carousel />
      <ContentList items={contentListMockData} />
    </main>
  )
}
