'use client'

import ContentCard from '@/components/content/ContentCard'
import styles from '@/components/content/ContentList.module.scss'
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'
import { useState } from 'react'

type ContentListProps = {
  title: string
  items: { id: string; title: string; imageUrl: string }[]
}

function ContentList({ title, items }: ContentListProps) {
  const [visibleItems, setVisibleItems] = useState(items.slice(0, 10))
  const fetchNextPage = () => {
    setVisibleItems((prevItems) => [...prevItems, ...items.slice(prevItems.length, prevItems.length + 10)])
  }

  const observerTarget = useInfiniteScroll({
    fetchNextPage,
    hasNextPage: visibleItems.length < items.length,
    isLoading: false,
  })

  return (
    <section className={styles.listContainer}>
      <h3 className={styles.title}>{title}</h3>
      {visibleItems.map((item, index) => (
        <ContentCard key={item.id} item={{ ...item, rank: index + 1 }} />
      ))}
      <div ref={observerTarget} className='h-4 w-full' />
    </section>
  )
}

export default ContentList
