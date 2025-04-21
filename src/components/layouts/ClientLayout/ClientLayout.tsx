'use client'

import NavBar from '@/components/layouts/NavBar/NavBar'
import type { ReactNode } from 'react'
import Footer from '../Footer/Footer'

const ClientLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}

export default ClientLayout
