'use client'

import styles from './ContentCard.module.scss'

type ContentCardProps = {
  item: { id: string; title: string; imageUrl: string }
}

function ContentCard({ item }: ContentCardProps) {
  return (
    <div className={styles.card}>
      <img src={item.imageUrl} alt={item.title} className={styles.image} />
      <h3 className={styles.title}>{item.title}</h3>
    </div>
  )
}

export default ContentCard
