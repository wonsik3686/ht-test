'use client'
import ContentList from '@/components/content/ContentList'
import CategorySwiper from '@/components/layouts/CategorySwiper/CategorySwiper'
import NavBar from '@/components/layouts/NavBar/NavBar'
import Carousel from '@/components/ui/Carousel/Carousel'
import { contentListMockData } from '@/mocks/contentListMockData'
import styles from './styles.module.scss'

export default function Home() {
  return (
    <>
      <NavBar />
      <CategorySwiper
        items={[
          {
            id: 'category-content-1',
            hash: 'chart',
            children: (
              <main className={styles.main}>
                <Carousel />
                <ContentList items={contentListMockData} />
              </main>
            ),
          },
          {
            id: 'category-content-2',
            hash: 'whook',
            children: (
              <main className={styles.main}>
                <Carousel />
                <ContentList items={contentListMockData} />
              </main>
            ),
          },
          {
            id: 'category-content-3',
            hash: 'event',
            children: (
              <main className={styles.main}>
                <Carousel />
                <ContentList items={contentListMockData} />
              </main>
            ),
          },
          {
            id: 'category-content-4',
            hash: 'news',
            children: (
              <main className={styles.main}>
                <Carousel />
                <ContentList items={contentListMockData} />
              </main>
            ),
          },
          {
            id: 'category-content-5',
            hash: 'store',
            children: (
              <main className={styles.main}>
                <Carousel />
                <ContentList items={contentListMockData} />
              </main>
            ),
          },
          {
            id: 'category-content-6',
            hash: 'charging',
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
