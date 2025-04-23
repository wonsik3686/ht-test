import styles from '@/components/ui/Banner/Banner.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import Badge from '../Badge/Badge'
import Button from '../Button/Button'
import Card from '../Card/Card'

type BannerProps = {
  imageSrc: string
  title: string
  content: string
  status: 'in-progress' | 'upcoming' | 'completed'
  link?: string
  linkButtonLabel?: string
}

export default function Banner({ imageSrc, title, content, status, link, linkButtonLabel }: BannerProps) {
  return (
    <Card className={styles.banner}>
      <div className={styles.banner__image}>
        <Badge status={status} className={styles.banner__badge}>
          {status === 'in-progress' ? '진행 중' : status === 'upcoming' ? '예정' : '종료'}
        </Badge>
        <Image src={imageSrc} alt={title} fill style={{ objectFit: 'cover' }} priority />
      </div>
      <div className={styles.banner__bottom}>
        <div className={styles.banner__label}>
          <h3 className={styles.banner__title}>{title}</h3>
          {link && (
            <Button className={styles.banner__linkButton} variant='outline'>
              <Link href={link} target='_blank' className={styles.banner__link}>
                {linkButtonLabel || '자세히'}
              </Link>
            </Button>
          )}
        </div>
        <p className={styles.banner__content}>{content}</p>
      </div>
    </Card>
  )
}
