import Collection from '@/components/shared/Collection'
import { Button } from '@/components/ui/button'
import { getCarsByUser } from '@/lib/actions/car.actions'
import { getOrdersByUser } from '@/lib/actions/order.actions'
import { IOrder } from '@/lib/database/models/order.model'
import { auth } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Profile = async () => {
    const { sessionClaims } = auth();
    const userId = sessionClaims?.userId as string;

    const addedCars = await getCarsByUser({ userId, page: 1 })

    const orders = await getOrdersByUser({ userId, page: 1})
    // console.log(`profile/orders:`);
    // // console.log(orders);
    const orderedCars = orders?.data.map((order: IOrder) => order.car) || [];
    console.log(orderedCars);

    return (
        <>
            {/* My Rented Cars */}
            <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
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
                    page={1}
                    urlParamName="ordersPage"
                    totalPages={2}
                />
            </section>

            {/* My Added Cars */}
            <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
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
                    limit={6}
                    page={1}
                    urlParamName="carsPage"
                    totalPages={2}
                />
            </section>
        </>
    )
}

export default Profile