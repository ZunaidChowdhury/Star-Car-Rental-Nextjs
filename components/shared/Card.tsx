import { ICar } from '@/lib/database/models/car.model'
import { formatDateTime } from '@/lib/utils'
import { auth } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { DeleteConfirmation } from './DeleteConfirmation'

type CardProps = {
    car: ICar,
    hasOrderLink?: boolean,
    hidePrice?: boolean
}

const Card = ({ car, hasOrderLink, hidePrice }: CardProps) => {
    const { sessionClaims } = auth();
    const userId = sessionClaims?.userId as string;

    const isCarCreator = userId === car.carBy._id.toString();

    return (
        <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
            <Link
                href={`/cars/${car._id}`}
                style={{ backgroundImage: `url(${car.picturePath})` }}
                className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
            />

            {/* IS CAR CREATOR ... */}

            {isCarCreator && !hidePrice && (
                <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all">
                    <Link href={`/cars/${car._id}/update`}>
                        <Image src="/jvm/icons/edit.svg" alt="edit" width={20} height={20} />
                    </Link>

                    <DeleteConfirmation carId={car._id} />
                </div>
            )}

            <div
                className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4"
            >
                {!hidePrice && <div className="flex gap-2">
                    <span className="p-semibold-14 w-min rounded-full bg-green-100 px-4 py-1 text-green-60">
                        {`$${car.rentalCostPerDay}`}
                    </span>
                    <p className="p-semibold-14 w-min rounded-full bg-grey-500/10 px-4 py-1 text-grey-500 line-clamp-1">
                        {car.category.name}
                    </p>
                </div>}

                <p className="p-medium-16 p-medium-18 text-grey-500">
                    {formatDateTime(car.available_till).dateTime}
                </p>

                <Link href={`/cars/${car._id}`}>
                    <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black">{`${car.make} ${car.model}`}</p>
                </Link>

                <div className="flex-between w-full">
                    <p className="p-medium-14 md:p-medium-16 text-grey-600">
                        {car.carBy.firstName} {car.carBy.lastName}
                    </p>

                    {hasOrderLink && (
                        <Link href={`/orders?carId=${car._id}`} className="flex gap-2">
                            <p className="text-primary-500">Order Details</p>
                            <Image src="/jvm/icons/arrow.svg" alt="search" width={10} height={10} />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Card