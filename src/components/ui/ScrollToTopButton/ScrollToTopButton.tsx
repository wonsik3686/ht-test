'use client'

import Button from '@/components/ui/Button/Button'
import useScrollToTop from '@/hooks/useScrollToTop'
import { ArrowUp } from 'lucide-react'

function ScrollToTopButton() {
  const scrollToTop = useScrollToTop()

  return (
    <Button onClick={scrollToTop} variant='primary' rounded>
      <ArrowUp />
    </Button>
  )
}

export default ScrollToTopButton
