'use client'

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/a11y'
import styles from '@/components/layouts/NavBar/NavBar.module.scss'
import Button from '@/components/ui/Button/Button'
import useHash from '@/hooks/useHash'
import clsx from 'clsx'

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
    <nav className={styles.navbar}>
      <div className={styles.navbar__items}>
        {navItems.map((item) => (
          <Button
            key={item.id}
            data-category={item.id}
            variant='ghost'
            className={clsx(
              styles.navbar__item,
              (hash === item.href || (hash === '' && item.id === 'chart')) && styles.navbar__item_active,
            )}
            onClick={() => {
              window.location.href = item.href
            }}
          >
            {item.label}
          </Button>
        ))}
      </div>
    </nav>
  )
}
