'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/a11y'
import Button from '@/components/ui/Button/Button'
import useHash from '@/hooks/useHash'
import clsx from 'clsx'
import { A11y, Navigation } from 'swiper/modules'
import styles from './NavBar.module.scss'

const navItems = [
  {
    id: 'chart',
    href: '#chart',
    label: '차트',
  },
  {
    id: 'whook',
    href: '#whook',
    label: 'Whook',
  },
  {
    id: 'event',
    href: '#event',
    label: '이벤트',
  },
  {
    id: 'news',
    href: '#news',
    label: '뉴스',
  },
  {
    id: 'store',
    href: '#store',
    label: '스토어',
  },
  {
    id: 'charging',
    href: '#charging',
    label: '충전소',
  },
]

export default function NavBar() {
  const hash = useHash()

  return (
    <nav className={styles['nav-container']}>
      <Swiper
        slidesPerView={5.7}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5.7,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation, A11y]}
      >
        {navItems.map((item) => (
          <SwiperSlide key={item.id} data-category={item.id}>
            <Button
              variant='ghost'
              className={clsx(
                styles['nav-item'],
                (hash === item.href || (hash === '' && item.id === 'chart')) && styles.active,
              )}
              onClick={() => {
                window.location.href = item.href
              }}
            >
              {item.label}
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
    </nav>
  )
}
