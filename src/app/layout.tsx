import type { Metadata, Viewport } from 'next'
import '@/styles/main.scss'

export const metadata: Metadata = {
  title: '한터 글로벌',
  description: 'K-POP 글로벌 플랫폼 과제 테스트 - 프론트엔드 구현',
  keywords: 'Hanteo, K-POP, frontend',
  authors: [{ name: '정원식' }],
  metadataBase: new URL('https://ht-test-ws.vercel.app/'),
  openGraph: {
    title: '한터 글로벌',
    description: 'K-POP 글로벌 플랫폼 과제 테스트 - 프론트엔드 구현',
    type: 'website',
    images: ['/ht-logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '한터 글로벌',
    description: 'K-POP 글로벌 플랫폼 과제 테스트 - 프론트엔드 구현',
    images: ['/ht-logo.png'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ko'>
      <body>{children}</body>
    </html>
  )
}
