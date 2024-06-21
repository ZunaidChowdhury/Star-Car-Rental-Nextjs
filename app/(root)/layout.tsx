import type { Metadata } from 'next'
import Footer from "@/components/Footer"
import NavBar from "@/components/NavBar"

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
    <div className="flex h-screen flex-col">
      <NavBar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}