import './globals.css';
import styles from './page.module.scss';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Barriecito } from 'next/font/google'
//const Bar = Barriecito({subsets: 'latin' })

//const Bar = Barriecito({subsets: 'latin' })
const inter = Inter({subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
    
        {children}
     
        </body>
    </html>
  )
}
