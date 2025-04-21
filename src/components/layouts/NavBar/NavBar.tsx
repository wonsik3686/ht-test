'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { A11y, Navigation } from 'swiper/modules'
import styles from './NavBar.module.scss'

export default function NavBar() {
  const pathname = usePathname()

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
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation, A11y]}
      >
        <SwiperSlide data-category='chart'>
          <Link href='/chart' className={clsx(styles['nav-item'], pathname === '/chart' && styles.active)}>
            차트
          </Link>
        </SwiperSlide>
        <SwiperSlide data-category='whook'>
          <Link href='/whook' className={clsx(styles['nav-item'], pathname === '/whook' && styles.active)}>
            Whook
          </Link>
        </SwiperSlide>
        <SwiperSlide data-category='event'>
          <Link href='/event' className={clsx(styles['nav-item'], pathname === '/event' && styles.active)}>
            이벤트
          </Link>
        </SwiperSlide>
        <SwiperSlide data-category='news'>
          <Link href='/news' className={clsx(styles['nav-item'], pathname === '/news' && styles.active)}>
            뉴스
          </Link>
        </SwiperSlide>
        <SwiperSlide data-category='store'>
          <Link href='/store' className={clsx(styles['nav-item'], pathname === '/store' && styles.active)}>
            스토어
          </Link>
        </SwiperSlide>
        <SwiperSlide data-category='charging'>
          <Link href='/charging' className={clsx(styles['nav-item'], pathname === '/charging' && styles.active)}>
            충전소
          </Link>
        </SwiperSlide>
      </Swiper>
    </nav>
  )
}
