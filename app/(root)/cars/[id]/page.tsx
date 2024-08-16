import CheckoutButton from '@/components/shared/CheckoutButton';
import Collection from '@/components/shared/Collection';
import { getCarById, getRelatedCarsByCategory } from '@/lib/actions/car.actions'
import { formatDateTime } from '@/lib/utils';
import { SearchParamProps } from '@/types'
import Image from 'next/image';
import React from 'react'

const CarDetails = async ({ params: { id }, searchParams }: SearchParamProps) => {
  const car = await getCarById(id);

  const relatedCars = await getRelatedCarsByCategory({
    categoryId: car.category._id,
    carId: car._id,
    page: searchParams.page as string,
  })

  return (
    <>
      <section className="w-full bg-primary-50 ">
        {/* wrapper  */}
        <div className="flex flex-col xl:flex-row items-center w-full max-w-[1280px] mx-auto pt-[40px] pb-[40px]">
          {/* image block */}
          <div className="w-full h-[600px] max-w-[500px] sm:max-w-[600px] md:max-w-[720px] lg:max-w-[800px]">
            <div style={{ backgroundImage: `url(${car.picturePath})` }}
              className="w-full h-full bg-cover bg-center" />
          </div>

          {/* text block */}
          <div className='w-full flex-1 max-w-[420px] ml-10 flex flex-col overflow-hidden'>

            <h2 className='font-bold text-[30px] mt-10'>{`${car.make} ${car.model}`}</h2>

            <div className='flex justify-between mt-10'>
              {/* single element */}
              <div>
                <p className='text-gray-500 text-[16px]'>Make</p>
                <div className='w-[200px] h-[40px] mt-1 flex border border-gray items-center'>
                  <div className='ml-3 mb-[2px]'>
                    <Dollar width='24px' height='24px' color='#705CF6' />
                  </div>
                  <h3 className='font-medium text-[16px] ml-2'>{car.make}</h3>
                </div>
              </div>
              <div>
                <p className='text-gray-500 text-[16px]'>Model Year</p>
                <div className='w-[200px] h-[40px] mt-1 flex border border-gray items-center'>
                  <div className='ml-3 mb-[2px]'>
                    <Dollar width='24px' height='24px' color='#705CF6' />
                  </div>
                  <h3 className='font-medium text-[16px] ml-2'>{car.year}</h3>
                </div>
              </div>
            </div>

            <div className='flex justify-between mt-5'>
              {/* single element */}
              <div>
                <p className='text-gray-500 text-[16px]'>Seats</p>
                <div className='w-[200px] h-[40px] mt-1 flex border border-gray items-center'>
                  <div className='ml-3 mb-[2px]'>
                    <Dollar width='24px' height='24px' color='#705CF6' />
                  </div>
                  <h3 className='font-medium text-[16px] ml-2'>{car.seats}</h3>
                </div>
              </div>
              <div>
                <p className='text-gray-500 text-[16px]'>Highway MPG</p>
                <div className='w-[200px] h-[40px] mt-1 flex border border-gray items-center'>
                  <div className='ml-3 mb-[2px]'>
                    <Dollar width='24px' height='24px' color='#705CF6' />
                  </div>
                  <h3 className='font-medium text-[16px] ml-2'>{car.highway_MPG}</h3>
                </div>
              </div>
            </div>

            <div className='flex justify-between mt-5'>
              {/* single element */}
              <div>
                <p className='text-gray-500 text-[16px]'>Fuel Type</p>
                <div className='w-[200px] h-[40px] mt-1 flex border border-gray items-center'>
                  <div className='ml-3 mb-[2px]'>
                    <Dollar width='24px' height='24px' color='#705CF6' />
                  </div>
                  <h3 className='font-medium text-[16px] ml-2'>{car.fuelType}</h3>
                </div>
              </div>
              <div>
                <p className='text-gray-500 text-[16px]'>Drive</p>
                <div className='w-[200px] h-[40px] mt-1 flex border border-gray items-center'>
                  <div className='ml-3 mb-[2px]'>
                    <Dollar width='24px' height='24px' color='#705CF6' />
                  </div>
                  <h3 className='font-medium text-[16px] ml-2'>{car.drive}</h3>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* CARS with the same category */}
      <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">Related Cars</h2>

        <Collection
          data={relatedCars?.data}
          emptyTitle="No Cars Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Cars"
          limit={3}
          page={searchParams.page as string}
          totalPages={relatedCars?.totalPages}
        />
      </section>
    </>
  )
}

export default CarDetails