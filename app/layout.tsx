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
  description: 'Discover best cars to rent.',
  icons: {
    icon: '/assets/images/logo.svg'
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={poppins.variable}>
        {/* <NavBar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
    </ClerkProvider>
  )
}