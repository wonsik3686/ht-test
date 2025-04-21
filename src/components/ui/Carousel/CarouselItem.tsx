import Image from 'next/image'
import Link from 'next/link'
import Badge from '../Badge/Badge'
import Button from '../Button/Button'
import Card from '../Card/Card'
import styles from './Carousel.module.scss'

type CarouselItemProps = {
  imageSrc: string
  title: string
  content: string
  status: 'in-progress' | 'upcoming' | 'completed'
  link?: string
  linkButtonLabel?: string
}

export default function CarouselItem({ imageSrc, title, content, status, link, linkButtonLabel }: CarouselItemProps) {
  return (
    <Card className={styles.card}>
      <div className={styles.card__image}>
        <Badge status={status} className={styles.carousel__badge}>
          {status === 'in-progress' ? '진행 중' : status === 'upcoming' ? '예정' : '종료'}
        </Badge>
        <Image src={imageSrc} alt={title} fill style={{ objectFit: 'cover' }} />
      </div>
      <div className={styles.card__bottom}>
        <div className={styles.card__label}>
          <h3 className={styles.card__title}>{title}</h3>
          {link && (
            <Button className={styles.card__linkButton} variant='outline'>
              <Link href={link} target='_blank' className={styles.card__link}>
                {linkButtonLabel || '자세히'}
              </Link>
            </Button>
          )}
        </div>
        <p className={styles.card__content}>{content}</p>
      </div>
    </Card>
  )
}
