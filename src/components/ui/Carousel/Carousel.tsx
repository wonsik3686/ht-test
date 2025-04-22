'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/a11y'
import { bannerData } from '@/mocks/bannerData'
import { A11y, Navigation, Pagination } from 'swiper/modules'
import styles from './Carousel.module.scss'
import CarouselItem from './CarouselItem'

export default function Carousel() {
  return (
    <div className={styles.carousel}>
      <Swiper
        className={styles.swiper}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true, bulletActiveClass: styles.bulletActiveColor, bulletClass: styles.bulletColor }}
        loop={true}
        modules={[Navigation, A11y, Pagination]}
      >
        {bannerData.map((banner) => (
          <SwiperSlide key={banner.id}>
            <CarouselItem
              imageSrc={banner.imageSrc}
              title={banner.title}
              content={banner.content}
              status={banner.status as 'in-progress' | 'upcoming' | 'completed'}
              link={banner.link}
              linkButtonLabel={banner.linkButtonLabel}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
