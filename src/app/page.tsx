'use client'
import ContentList from '@/components/content/ContentList'
import CategorySwiper from '@/components/layouts/CategorySwiper/CategorySwiper'
import Carousel from '@/components/ui/Carousel/Carousel'
import { contentListMockData } from '@/mocks/contentListMockData'
import styles from './styles.module.scss'

export default function Home() {
  return (
    <>
      <CategorySwiper
        items={[
          {
            id: 'category-content-1',
            history: 'chart',
            children: (
              <main className={styles.main}>
                <Carousel />
                <ContentList items={contentListMockData} />
              </main>
            ),
          },
          {
            id: 'category-content-2',
            history: 'whook',
            children: (
              <main className={styles.main}>
                <Carousel />
                <ContentList items={contentListMockData} />
              </main>
            ),
          },
          {
            id: 'category-content-3',
            history: 'event',
            children: (
              <main className={styles.main}>
                <Carousel />
                <ContentList items={contentListMockData} />
              </main>
            ),
          },
          {
            id: 'category-content-4',
            history: 'news',
            children: (
              <main className={styles.main}>
                <Carousel />
                <ContentList items={contentListMockData} />
              </main>
            ),
          },
        ]}
      />
    </>
  )
}
