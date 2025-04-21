'use client'

import Button from '@/components/ui/Button/Button'
import Carousel from '@/components/ui/Carousel/Carousel'
import { ArrowUp } from 'lucide-react'

export default function Home() {
  return (
    <div>
      <Carousel />
      <Button
        onClick={() => {
          console.log('clicked')
        }}
        variant='primary'
      >
        Click me
      </Button>
      <Button
        onClick={() => {
          console.log('clicked')
        }}
        variant='secondary'
      >
        Click me
      </Button>
      <Button
        onClick={() => {
          console.log('clicked')
        }}
        variant='disabled'
      >
        Click me
      </Button>
      <Button
        onClick={() => {
          console.log('clicked')
        }}
        variant='outline'
      >
        Click me
      </Button>
      <Button
        onClick={() => {
          console.log('clicked')
        }}
        variant='outline'
        rounded
      >
        <ArrowUp />
      </Button>
    </div>
  )
}
