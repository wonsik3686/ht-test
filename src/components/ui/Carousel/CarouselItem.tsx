import Image from 'next/image'
import Badge from '../Badge/Badge'
import Card from '../Card/Card'
import styles from './Carousel.module.scss'

type CarouselItemProps = {
  imageSrc: string
  title: string
  content: string
  status: 'in-progress' | 'upcoming' | 'completed'
}

function CarouselItem({ imageSrc, title, content, status }: CarouselItemProps) {
  return (
    <Card className={styles.card}>
      <div className={styles.card__image}>
        <Badge status={status} className={styles.carousel__badge}>
          {status === 'in-progress' ? '진행 중' : status === 'upcoming' ? '예정' : '종료'}
        </Badge>
        <Image src={imageSrc} alt={title} fill style={{ objectFit: 'cover' }} />
      </div>
      <div className={styles.card__bottom}>
        <h3 className={styles.card__title}>{title}</h3>
        <p className={styles.card__content}>{content}</p>
      </div>
    </Card>
  )
}

export default CarouselItem
