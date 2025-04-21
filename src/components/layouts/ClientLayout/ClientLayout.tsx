'use client'

import NavBar from '@/components/layouts/NavBar/NavBar'
import type { ReactNode } from 'react'
import Footer from '../Footer/Footer'

function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}

export default ClientLayout
