'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
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
        modules={[Navigation, A11y, Pagination]}
      >
        <SwiperSlide>
          <CarouselItem
            imageSrc='/event/event1.png'
            title='Hanteo Music Awards 2025'
            content='2025.04.21 ~ 2025.04.27'
            status='in-progress'
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem
            imageSrc='/event/event2.png'
            title='VOTE & WIN 2025 HMA Ticket Now!'
            content='2025.05.01 ~ 2025.05.07'
            status='upcoming'
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem
            imageSrc='/event/event3.jpg'
            title='한터상회 32주년 한터뮤직어워즈 2025'
            content='2025.01.21 ~ 2025.01.27'
            status='completed'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
