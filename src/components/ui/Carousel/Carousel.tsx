'use client'

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/a11y'
import 'swiper/scss/autoplay'
import Banner from '@/components/ui/Banner/Banner'
import styles from '@/components/ui/Carousel/Carousel.module.scss'
import { bannerData } from '@/mocks/bannerData'
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Carousel() {
  return (
    <div className={styles.carousel}>
      <Swiper
        className={styles.swiper}
        slidesPerView={1.2}
        spaceBetween={16}
        centeredSlides={true}
        loop={true}
        loopAddBlankSlides={true}
        autoplay={{
          delay: 2500,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          type: 'bullets',
          horizontalClass: styles.carousel__pagination,
          bulletActiveClass: styles.carousel__bullet_active,
          bulletClass: styles.carousel__bullet,
        }}
        modules={[Navigation, A11y, Pagination, Autoplay]}
      >
        {bannerData.map((banner) => (
          <SwiperSlide key={banner.id} className={styles.carousel__slide}>
            <Banner
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
