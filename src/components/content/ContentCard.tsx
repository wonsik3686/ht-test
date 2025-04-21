'use client'

import Image from 'next/image'
import styles from './ContentCard.module.scss'

type ContentCardProps = {
  item: { id: string; title: string; imageUrl: string; rank: number }
}

function ContentCard({ item }: ContentCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={item.imageUrl} alt={item.title} fill style={{ objectFit: 'cover' }} />
      </div>
      <div className={styles.rank}>{item.rank}</div>
      <h3 className={styles.title}>{item.title}</h3>
    </div>
  )
}

export default ContentCard
