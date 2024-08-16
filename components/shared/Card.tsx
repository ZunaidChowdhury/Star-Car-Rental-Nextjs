import { ICar } from '@/lib/database/models/car.model'
import { formatDateTime } from '@/lib/utils'
import { auth } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { DeleteConfirmation } from './DeleteConfirmation'
import CalenderIcon from '../icons/CalenderIcon'
import PersonsIcon from '../icons/PersonsIcon'
import FuelIcon from '../icons/FuelIcon'
import KeyIcon from '../icons/KeyIcon'

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
        <div className="group relative flex h-[380px] w-[400px] flex-col overflow-hidden bg-white shadow-md transition-all hover:shadow-2xl md:min-h-[438px]">
            {/* image */}
            <Link
                href={`/cars/${car._id}`}
                style={{ backgroundImage: `url(${car.picturePath})` }}
                className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
            />

            {/* IF CAR CREATOR, CAN UPDATE OR DELETE ... */}

            {isCarCreator && !hidePrice && (
                <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm  transition-all">
                    <Link href={`/cars/${car._id}/update`}>
                        <Image src="/jvm/icons/edit.svg" alt="edit" width={20} height={20} />
                    </Link>

                    <DeleteConfirmation carId={car._id} />
                </div>
            )}

            {/* title and more text */}
            <div className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4">

                <div className='flex justify-between '>
                    <Link href={`/cars/${car._id}`}>
                        <h1 className="flex-1 text-black font-medium text-[22px] w-full max-w-[200px] max-h-[33px] overflow-hidden">{`${car.make} ${car.model}`}</h1>
                    </Link>
                    <h4 className="rounded-full bg-theme-primary px-4 py-1 text-white h-fit">
                        {car.category.name}
                    </h4>
                </div>




                {/* {!hidePrice && <div className="flex gap-2">
                    <span className="p-semibold-14 w-min rounded-full bg-green-100 px-4 py-1 text-green-60">
                        {`$${car.rentalCostPerDay}`}
                    </span>
                    <p className="p-semibold-14 w-min rounded-full bg-grey-500/10 px-4 py-1 text-grey-500 line-clamp-1">
                        {car.category.name}
                    </p>
                </div>} */}

                <div className='flex mt-2'>
                    <div className='flex'>
                        <CalenderIcon width='24px' height='24px' color='#705CF5'/>
                        <h3 className="font-medium text-[18px] text-black text-right ml-2"> {`${car.year}`}</h3>
                    </div>

                    <div className='flex ml-6'>
                        <PersonsIcon width='24px' height='24px' color='#705CF5'/>
                        <h3 className="font-medium text-[18px] text-black text-right ml-2"> {`${car.seats}`}</h3>
                    </div>

                    <div className='flex ml-6'>
                        <FuelIcon width='24px' height='24px' color='#705CF5'/>
                        <h3 className="font-medium text-[18px] text-black text-right ml-2"> {`${car.highway_MPG}`}</h3>
                    </div>
                </div>

                <hr className='block h-[1px]  text-gray-500 my-2'/>

                <div className='flex justify-between '>
                    <div className='flex'>
                        <KeyIcon width='24px' height='24px' color='#705CF5'/>
                        <h3 className="font-medium text-[18px] text-grey-500 ml-2">Rental Cost</h3>
                    </div>

                    <div>
                        <h3 className="font-medium text-[18px] text-black text-right"> {`$${car.rentalCostPerDay} /Day`}</h3>
                        <p className="p-medium-16 p-medium-18 text-grey-500 text-right">Inc. VAT</p>
                    </div>
                </div>


                {hasOrderLink && (
                    <>
                        <p className="p-medium-16 p-medium-18 text-grey-500">
                            Available till: {' '}
                            {formatDateTime(car.available_till).dateOnly} - {' '}
                            {formatDateTime(car.available_till).timeOnly}
                        </p>

                        <div className="flex-between w-full">
                            <p className="p-medium-14 md:p-medium-16 text-grey-600">
                                {car.carBy.firstName} {car.carBy.lastName}
                            </p>

                            <Link href={`/orders?carId=${car._id}`} className="flex gap-2">
                                <p className="text-primary-500">Order Details</p>
                                <Image src="/jvm/icons/arrow.svg" alt="search" width={10} height={10} />
                            </Link>
                        </div>
                    </>
                )}




            </div>
        </div >
    )
}

export default Card