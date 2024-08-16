import Collection from '@/components/shared/Collection'
import { Button } from '@/components/ui/button'
import { getCarsByUser } from '@/lib/actions/car.actions'
import { getOrdersByUser } from '@/lib/actions/order.actions'
import { IOrder } from '@/lib/database/models/order.model'
import { SearchParamProps } from '@/types'
import { auth } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Profile = async ({ searchParams }: SearchParamProps) => {
    const { sessionClaims } = auth();
    const userId = sessionClaims?.userId as string;

    const ordersPage = Number(searchParams?.ordersPage) || 1;
    const carsPage = Number(searchParams?.carsPage) || 1;

    const addedCars = await getCarsByUser({ userId, page: carsPage })

    const orders = await getOrdersByUser({ userId, page: ordersPage})

    const orderedCars = orders?.data.map((order: IOrder) => order.car) || [];



    return (
        <>
            {/* My Rented Cars */}
            <section className="bg-primary-50 py-1 md:py-2">
                <div className="wrapper flex items-center justify-center sm:justify-between">
                    <h3 className='h3-bold text-center sm:text-left'>My Rented Cars</h3>
                    <Button asChild size="lg" className="button hidden sm:flex">
                        <Link href="/#cars">
                            Explore More Cars
                        </Link>
                    </Button>
                </div>
            </section>

            <section className="wrapper my-8">
                <Collection
                    data={orderedCars}
                    emptyTitle="No car rented yet!"
                    emptyStateSubtext="No worries - plenty of cool cars to explore!"
                    collectionType="My_Cars"
                    limit={3}
                    page={ordersPage}
                    urlParamName="ordersPage"
                    totalPages={orders?.totalPages}
                />
            </section>

            {/* My Added Cars */}
            <section className="bg-primary-50 py-1 md:py-2">
                <div className="wrapper flex items-center justify-center sm:justify-between">
                    <h3 className='h3-bold text-center sm:text-left'>My Added Cars</h3>
                    <Button asChild size="lg" className="button hidden sm:flex">
                        <Link href="/cars/add">
                            Add New Car
                        </Link>
                    </Button>
                </div>
            </section>

            <section className="wrapper my-8">
                <Collection
                    data={addedCars?.data}
                    emptyTitle="No cars have been created yet!"
                    emptyStateSubtext="Go create one now"
                    collectionType="Cars_Added"
                    limit={3}
                    page={carsPage}
                    urlParamName="carsPage"
                    totalPages={addedCars?.totalPages}
                />
            </section>
        </>
    )
}

export default Profile