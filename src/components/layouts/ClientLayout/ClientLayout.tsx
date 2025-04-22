'use client'

import type { ReactNode } from 'react'
import Footer from '../Footer/Footer'

function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  )
}

export default ClientLayout
