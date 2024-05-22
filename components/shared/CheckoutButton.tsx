"use client"

import { ICar } from '@/lib/database/models/car.model'
import { SignedIn, SignedOut, useUser } from '@clerk/nextjs';
import React from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';
import Checkout from './Checkout';

const CheckoutButton = ({ car }: { car: ICar }) => {
    const { user } = useUser();
    const userId = user?.publicMetadata.userId as string;
    const isCarAvailable = new Date(car.available_till) < new Date();
    return (
        <div className="flex items-center gap-3">
            {isCarAvailable ? (
                <p className="p-2 text-red-400">Sorry, car is no longer available.</p>
            ) : (
                <>
                    <SignedOut>
                        <Button asChild className="button rounded-full" size="lg">
                            <Link href="/sign-in">
                                Rent Car
                            </Link>
                        </Button>
                    </SignedOut>

                    <SignedIn>
                        <Checkout car={car} userId={userId} />
                    </SignedIn>
                </>
            )}
        </div>
    )
}

export default CheckoutButton