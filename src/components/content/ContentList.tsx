'use client'

import ContentCard from '@/components/content/ContentCard'
import useInfiniteScroll from '@/hooks/useInfiniteScroll'
import { useState } from 'react'
import styles from './ContentList.module.scss'

type ContentListProps = {
  items: { id: string; title: string; imageUrl: string }[]
}

function ContentList({ items }: ContentListProps) {
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
      {visibleItems.map((item) => (
        <ContentCard key={item.id} item={item} />
      ))}
      <div ref={observerTarget} className='h-4 w-full' />
    </section>
  )
}

export default ContentList
