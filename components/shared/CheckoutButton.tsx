"use client"

import { ICar } from '@/lib/database/models/car.model'
import { SignedIn, SignedOut, useUser } from '@clerk/nextjs';
import React from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';
import Checkout from './Checkout';

const CheckoutButton = ({ car }: { car: ICar }) => {
    // getting user from clerk in client side 
    const { user } = useUser();
    const userId = user?.publicMetadata.userId as string;

    const isCarAvailable = new Date(car.available_till) > new Date();
    return (
        <div className="flex items-center gap-3">
            {isCarAvailable ? (
                <>
                    <SignedOut>
                        <div className="group w-full h-[80px] bg-[#705CF6] hover:bg-[#23ad00] rounded cursor-pointer transition-all duration-200 flex justify-center items-center">
                            <Link href="/sign-in">
                                <h3 className='text-white font-bold text-[24px] group-hover:text-black transition-all duration-200 select-none'>BOOK NOW</h3>
                            </Link>
                        </div>
                    </SignedOut>

                    <SignedIn>
                        <Checkout car={car} userId={userId} />
                    </SignedIn>
                </>
            ) : (
                <p className="p-2 text-red-400">Sorry, car is no longer available.</p>
            )}
        </div>
    )
}

export default CheckoutButton