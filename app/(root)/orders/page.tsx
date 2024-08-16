import React from 'react'
import { getOrdersByCar } from '@/lib/actions/order.actions'
import { formatDateTime, formatPrice } from '@/lib/utils'
import { SearchParamProps } from '@/types'
import { IOrderItem } from '@/lib/database/models/order.model'
import Search from '@/components/shared/Search'


const OrdersPage = async ({ searchParams }: SearchParamProps) => {
    const carId = (searchParams?.carId as string) || ''
    const searchText = (searchParams?.query as string) || ''

    const orders = await getOrdersByCar({ carId, searchString: searchText })

    return (
        <>
            <section className=" bg-primary-50 py-1 md:py-2">
                <h3 className="wrapper h3-bold text-center sm:text-left ">Orders</h3>
            </section>

            <section className="wrapper mt-8">
                <Search placeholder='Search Renters ...' />
            </section>

            <section className="wrapper overflow-x-auto">
                <table className="w-full border-collapse border-t">
                    <thead>
                        <tr className="p-medium-14 border-b text-grey-500">
                            <th className="min-w-[250px] py-3 text-left">Order ID</th>
                            <th className="min-w-[200px] flex-1 py-3 pr-4 text-left">Car Model</th>
                            <th className="min-w-[150px] py-3 text-left">Renter</th>
                            <th className="min-w-[100px] py-3 text-left">Rented At</th>
                            <th className="min-w-[100px] py-3 text-right">Rental Cost Per Day</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders && orders.length === 0 ? (
                            <tr className="border-b">
                                <td colSpan={5} className="py-4 text-center text-gray-500">
                                    No orders found.
                                </td>
                            </tr>
                        ) : (
                            <>
                                {orders &&
                                    orders.map((row: IOrderItem) => (
                                        <tr
                                            key={row._id}
                                            className="p-regular-14 lg:p-regular-16 border-b "
                                            style={{ boxSizing: 'border-box' }}>
                                            <td className="min-w-[250px] py-4 text-primary-500">{row._id}</td>
                                            <td className="min-w-[200px] flex-1 py-4 pr-4">{row.carModelName}</td>
                                            <td className="min-w-[150px] py-4">{row.renter}</td>
                                            <td className="min-w-[100px] py-4">
                                                {formatDateTime(row.rentedAt).dateTime}
                                            </td>
                                            <td className="min-w-[100px] py-4 text-right">
                                                {formatPrice(row.totalAmount)}
                                            </td>
                                        </tr>
                                    ))}
                            </>
                        )}
                    </tbody>
                </table>
            </section>
        </>
    )
}

export default OrdersPage