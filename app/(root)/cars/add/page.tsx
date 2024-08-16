import CarForm from '@/components/shared/CarForm'
import { auth } from '@clerk/nextjs';
import React from 'react'

const AddCar = () => {

  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;
  // console.log(`AddCar/userId: ${userId}`)

  return (
    <>
      <section className='bg-primary-50 bg-dotted-pattern bg-cover bg-center py-2 md:py-4'>
        <h3 className='wrapper h3-bold text-center sm:text-left'>Add Car</h3>
      </section>

      <div className="wrapper my-8">
        <CarForm userId={userId} type="Add" />
      </div>
    </>
  )
}

export default AddCar