import Link from 'next/link'
import React from 'react'
import { categoryDisplayItems } from "../../constants/index"
import Image from 'next/image';



const CategoryDisplayCarCard = () => {
  return (
    <div className='width-full flex flex-wrap gap-10 justify-center'>
      {
        categoryDisplayItems.map(categoryDisplayItem => (
          <Link href={`/category/${categoryDisplayItem.id}`} key={categoryDisplayItem.id}>
            <div className='h-[400px] w-[350px] bg-white shadow-md transition-all hover:shadow-2xl '>

              {/* image */}
              <div className='w-full h-[250px] bg-cover bg-center'
                style={{ backgroundImage: `url(${categoryDisplayItem.imagePath})` }}>

              </div>

              <div className="w-full h-full flex flex-col items-center mt-5">
                <h1 className='text-[28px] font-bold text-center'>
                  {categoryDisplayItem.name}
                </h1>
                <p className="text-grey-600 text-center px-5">
                  {categoryDisplayItem.description}
                </p>
              </div>

            </div>
          </Link>
        ))
      }
    </div>
  )
};

export default CategoryDisplayCarCard