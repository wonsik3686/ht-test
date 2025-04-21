'use client'

import { History } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
type CategorySwiperProps = {
  items: CategorySwiperItem[]
}

export type CategorySwiperItem = {
  id: string
  history: string
  children: React.ReactNode
}

function CategorySwiper({ items }: CategorySwiperProps) {
  return (
    <Swiper history={true} slidesPerView={1} modules={[History]}>
      {items.map((item) => (
        <SwiperSlide key={`category-swiper-${item.id}`} data-history={item.history}>
          {item.children}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default CategorySwiper
