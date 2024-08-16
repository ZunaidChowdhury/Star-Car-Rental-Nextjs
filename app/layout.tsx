import type { Metadata } from 'next'
import './globals.css'
import { Poppins } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Star Car Rental',
  description: `Bangladesh's #1 Luxury Car Rental`,
  // Setting Icon
  icons: {
    icon: '/mine/StarCarRental-logo-S.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${poppins.variable} relative bg-[#f2f2f2]`}>
        {/* <NavBar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
    </ClerkProvider>
  )
}