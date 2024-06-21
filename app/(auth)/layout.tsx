import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'Star Car Rental',
    description: `Bangladesh's #1 Luxury Car Rental`,
    // Setting Icon
    icons: {
        icon: '/mine/StarCarRental-logo-S.png'
    }
}

const layout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="flex-center min-h-screen w-full bg-primary-50 ">
            {children}
        </div>
    )
}

export default layout