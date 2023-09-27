import { SideBar } from '@/components/SideBar/SideBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import clsx from 'clsx'
import Navbar from '@/components/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={clsx(inter.className,"grid grid-cols-1 md:grid-cols-main")}>
        <SideBar className='top-0 max-md:hidden'/>
        {children}</body>
    </html>
  )
}
