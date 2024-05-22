"use server"

import Stripe from 'stripe';
import { CheckoutOrderParams, CreateOrderParams } from "@/types"
import { redirect } from 'next/navigation';
import { connectToDatabase } from '../database';
import { handleError } from '../utils';
import Order from '../database/models/order.model';

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
                            name: order.carModel
                        }
                    },
                    quantity: 1
                },
            ],
            metadata: {
                carId: order.carId,
                renterId: order.renterId,
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
            car: order.carId,
            renter: order.renterId,
        });

        return JSON.parse(JSON.stringify(newOrder));
    } catch (error) {
        handleError(error);
    }
}