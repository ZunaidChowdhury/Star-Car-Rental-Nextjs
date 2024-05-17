import CarForm from '@/components/shared/CarForm'
import { getCarById } from '@/lib/actions/car.actions';
import { auth } from '@clerk/nextjs';
import React from 'react'

type UpdateCarProps = {
    params: {
        id: string
    }
}

const UpdateCar = async ({ params: { id } }: UpdateCarProps) => {

    const { sessionClaims } = auth();

    const userId = sessionClaims?.userId as string;
    const car = await getCarById(id)

    return (
        <>
            <section className='bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10'>
                <h3 className='wrapper h3-bold text-center sm:text-left'>Update Car</h3>
            </section>

            <div className="wrapper my-8">
                <CarForm userId={userId} type="Update" car={car} carId={car._id} />
            </div>
        </>
    )
}

export default UpdateCar