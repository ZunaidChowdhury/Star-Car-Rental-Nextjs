"use server"

import Stripe from 'stripe';
import { CheckoutOrderParams, CreateOrderParams, GetOrdersByCarParams, GetOrdersByUserParams } from "@/types"
import { redirect } from 'next/navigation';
import { connectToDatabase } from '../database';
import { handleError } from '../utils';
import Order from '../database/models/order.model';
import Car from '../database/models/car.model';
import User from '../database/models/user.model';
import { ObjectId } from 'mongodb';

export const checkoutOrder = async (order: CheckoutOrderParams) => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

    const price = Number(order.rentalCost) * 100;
    try {
        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        unit_amount: price,
                        product_data: {
                            name: order.carModelName
                        }
                    },
                    quantity: 1
                },
            ],
            metadata: {
                car: order.car,
                renter: order.renter,
            },
            mode: 'payment',
            success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/profile`,
            cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/`,
        });

        redirect(session.url!)

    } catch (error) {
        throw error;
    }
}

export const createOrder = async (order: CreateOrderParams) => {
    try {
        await connectToDatabase();

        const newOrder = await Order.create({
            ...order,
            car: order.car,
            renter: order.renter,
        });

        return JSON.parse(JSON.stringify(newOrder));
    } catch (error) {
        handleError(error);
    }
}


// GET ORDERS BY CAR
export async function getOrdersByCar({ searchString, carId }: GetOrdersByCarParams) {

    try {
        await connectToDatabase()

        if (!carId) throw new Error('Car ID is required')
        const carObjectId = new ObjectId(carId)

        const orders = await Order.aggregate([
            {
                $lookup: {
                    from: 'users',
                    localField: 'renter',
                    foreignField: '_id',
                    as: 'renter',
                },
            },
            {
                $unwind: {
                    path: '$renter',
                }
                
            },
            {
                $lookup: {
                    from: 'cars',
                    localField: 'car',
                    foreignField: '_id',
                    as: 'car',
                },
            },
            {
                $unwind: {
                    path: '$car',
                }
            },
            {
                $project: {
                    _id: 1,
                    totalAmount: 1,
                    rentedAt: 1,
                    // carModelName: `${'$car.make'} ${'$car.model'}`,
                    carModelName: {
                        $concat: ['$car.make', ' ', '$car.model'],
                    },
                    carId: '$car._id',
                    renter: {
                        $concat: ['$renter.firstName', ' ', '$renter.lastName'],
                    },
                },
            },
            // {
            //     $match: {
            //         $and: [{ carId: carObjectId }, { renter: { $regex: RegExp(searchString, 'i') } }],
            //     },
            // },
        ])
        // console.log(`order 2`)
        // console.log(orders)
        return JSON.parse(JSON.stringify(orders))
    } catch (error) {
        handleError(error)
    }
}


// const orders = await Order.find({ renterId: new ObjectId(userId!) })
// GET ORDERS BY USER
// export async function getOrdersByUser({ userId, limit = 3, page }: GetOrdersByUserParams) {

//     try {
//         await connectToDatabase();

//         const skipAmount = (Number(page) - 1) * limit;
//         const conditions = { renter: new ObjectId(userId!) };

//         // First, get the distinct car._id values
//         const distinctCarIds = await Order.distinct('car', conditions);
//         // console.log(`order/1`)
//         // console.log(userId)
//         // console.log(distinctCarIds)

//         // Then, query the orders using the distinct car IDs
//         const orders = await Order.find({ 'car': { $in: distinctCarIds } })
//             .sort({ createdAt: 'desc' })
//             .skip(skipAmount)
//             .limit(limit)
//             // .populate({ path: 'car', model: Car, select: '_id make model' })
//             .populate({
//                 path: 'car',
//                 model: Car,
//                 populate: {
//                     path: 'carBy',
//                     model: User,
//                     select: '_id firstName lastName',
//                 },
//             });

//         console.log(orders);

//         // Count the total number of orders that match the conditions
//         const ordersCount = await Order.countDocuments(conditions);

//         return { data: JSON.parse(JSON.stringify(orders)), totalPages: Math.ceil(ordersCount / limit) };
//     } catch (error) {
//         handleError(error);
//     }
//     // try {
//     //     await connectToDatabase()

//     //     const skipAmount = (Number(page) - 1) * limit
//     //     const conditions = { renterId: new ObjectId(userId!) }

//     //     const orders = await Order.distinct('car._id')
//     //         .find(conditions)
//     //         .sort({ createdAt: 'desc' })
//     //         .skip(skipAmount)
//     //         .limit(limit)
//     //         .populate({
//     //             path: 'car',
//     //             model: Car,
//     //             populate: {
//     //                 path: 'carBy',
//     //                 model: User,
//     //                 select: '_id firstName lastName',
//     //             },
//     //         })
//     //     console.log(orders)
//     //     const ordersCount = await Order.distinct('car._id').countDocuments(conditions)

//     //     return { data: JSON.parse(JSON.stringify(orders)), totalPages: Math.ceil(ordersCount / limit) }
//     // } catch (error) {
//     //     handleError(error)
//     // }
// }






















// GET ORDERS BY USER
export async function getOrdersByUser({ userId, limit = 3, page }: GetOrdersByUserParams) {

    try {
        await connectToDatabase()

        const skipAmount = (Number(page) - 1) * limit
        const conditions = { renter: userId }

        const orders = await Order.distinct('car._id')
            .find(conditions)
            .sort({ rentedAt: 'desc' })
            .skip(skipAmount)
            .limit(limit)
            .populate({
                path: 'car',
                model: Car,
                populate: {
                    path: 'carBy',
                    model: User,
                    select: '_id firstName lastName',
                },
            })
        // console.log(orders)
        const ordersCount = await Order.distinct('car._id').countDocuments(conditions)

        return { data: JSON.parse(JSON.stringify(orders)), totalPages: Math.ceil(ordersCount / limit) }
    } catch (error) {
        handleError(error)
    }
}