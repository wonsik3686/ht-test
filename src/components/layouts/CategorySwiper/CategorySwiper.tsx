'use client'

import type { Swiper as SwiperType } from 'swiper'
import { HashNavigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/hash-navigation'
import useScrollToTop from '@/hooks/useScrollToTop'
import { useRef } from 'react'

type CategorySwiperProps = {
  items: CategorySwiperItem[]
}

export type CategorySwiperItem = {
  id: string
  hash: string
  children: React.ReactNode
}

function CategorySwiper({ items }: CategorySwiperProps) {
  const swiperRef = useRef<SwiperType>(null)
  const scrollToTop = useScrollToTop()

  return (
    <Swiper
      history={true}
      slidesPerView={1}
      modules={[HashNavigation]}
      hashNavigation={{ watchState: true }}
      onHashChange={() => {
        scrollToTop()
      }}
      onSwiper={(swiper) => {
        swiperRef.current = swiper
      }}
    >
      {items.map((item) => (
        <SwiperSlide key={`category-swiper-${item.id}`} data-hash={item.hash}>
          {item.children}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default CategorySwiper
