'use client'

import Button from '@/components/ui/Button/Button'
import { ArrowUp } from 'lucide-react'

function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <Button onClick={scrollToTop} variant='primary' rounded>
      <ArrowUp />
    </Button>
  )
}

export default ScrollToTopButton
