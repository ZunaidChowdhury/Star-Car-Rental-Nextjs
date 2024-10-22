import Dollar from '@/components/icons/DollarIcon';
import KeyIcon from '@/components/icons/KeyIcon';
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

            {/* rental cost  */}
            <div className='flex justify-between bg-[#F2F2F2] mt-8 px-5 py-5 rounded'>
              <div className='flex'>
                <KeyIcon width='24px' height='24px' color='#705CF5' />
                <h3 className="font-medium text-[18px] ml-2">Rental Cost</h3>
              </div>

              <div>
                <h3 className="font-medium text-[18px] text-black text-right"> {`$${car.rentalCostPerDay} /Day`}</h3>
                <p className="p-medium-16 p-medium-18 text-grey-500 text-right">Inc. VAT</p>
              </div>
            </div>

            <div className='mt-6'>
              {/* CHECKOUT  */}
              <CheckoutButton car={car} />
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




//   < div className = "flex w-full flex-col gap-8 p-5 md:p-10" >
//     <div className="flex flex-col gap-6">
//       <h2 className='h2-bold'>{`${car.make} ${car.model}`}</h2>
//       <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
//         <div className="flex gap-3">
//           <p className="p-bold-20 rounded-full bg-green-500/10 px-5 py-2 text-green-700">
//             {`Rental Cost: $${car.rentalCostPerDay}`}
//           </p>
//           <p className="p-medium-16 rounded-full bg-grey-500/10 px-4 py-2.5 text-grey-500">
//             {car.category.name}
//           </p>
//         </div>
//         <p className="p-medium-18 ml-2 mt-2 sm:mt-0">
//           by{' '}
//           <span className="text-primary-500">{car.carBy.firstName} {car.carBy.lastName}</span>
//         </p>
//       </div>
//     </div>



// <div className="flex flex-col gap-5">
//   <div className='flex gap-2 md:gap-3'>
//     <p className="p-medium-16 lg:p-regular-20 flex flex-wrap items-center">Available till: </p>
//     <Image src="/jvm/icons/calendar.svg" alt="calendar" width={32} height={32} />
//     <div className="p-medium-16 lg:p-regular-20 flex flex-wrap items-center">
//       <p>
//         {formatDateTime(car.available_till).dateOnly} - {' '}
//         {formatDateTime(car.available_till).timeOnly}
//       </p>
//     </div>
//   </div>
// </div>
// </div >