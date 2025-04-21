'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
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
        pagination={{ clickable: true }}
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
