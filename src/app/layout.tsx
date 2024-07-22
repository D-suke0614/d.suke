import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'd.suke',
  description: 'd.suke',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.className} mx-56`}>
        <Header />
        {children}
        <footer className="py-10 mt-12 border-solid border-t border-[#484848]">
          <p>©︎d.suke 2024.</p>
        </footer>
      </body>
    </html>
  )
}
