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
          <Link
            href='/category/chart'
            className={clsx(styles['nav-item'], pathname === '/category/chart' && styles.active)}
          >
            차트
          </Link>
        </SwiperSlide>
        <SwiperSlide data-category='whook'>
          <Link
            href='/category/whook'
            className={clsx(styles['nav-item'], pathname === '/category/whook' && styles.active)}
          >
            Whook
          </Link>
        </SwiperSlide>
        <SwiperSlide data-category='event'>
          <Link
            href='/category/event'
            className={clsx(styles['nav-item'], pathname === '/category/event' && styles.active)}
          >
            이벤트
          </Link>
        </SwiperSlide>
        <SwiperSlide data-category='news'>
          <Link
            href='/category/news'
            className={clsx(styles['nav-item'], pathname === '/category/news' && styles.active)}
          >
            뉴스
          </Link>
        </SwiperSlide>
        <SwiperSlide data-category='store'>
          <Link
            href='/category/store'
            className={clsx(styles['nav-item'], pathname === '/category/store' && styles.active)}
          >
            스토어
          </Link>
        </SwiperSlide>
        <SwiperSlide data-category='charging'>
          <Link
            href='/category/charging'
            className={clsx(styles['nav-item'], pathname === '/category/charging' && styles.active)}
          >
            충전소
          </Link>
        </SwiperSlide>
      </Swiper>
    </nav>
  )
}
