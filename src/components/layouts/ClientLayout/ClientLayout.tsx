'use client'

import NavBar from '@/components/layouts/NavBar/NavBar'
import type { ReactNode } from 'react'

const ClientLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  )
}

export default ClientLayout
