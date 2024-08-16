import { carCategories } from '@/constants';
import { SearchParamProps } from '@/types';
import React from 'react'

const CarCategoryPage = ({ params: { id } }: SearchParamProps) => {
    const categoryName = getCategoryNameByUrl(id)
    console.log(`categoryName:`)
    console.log(id)

    return (
        <div className='text-center w-full min-h-screen'>
            <div className="w-full h-full flex flex-col items-center mt-10">
                <h1 className='text-[28px] font-bold text-center'>
                {`Car Category ${id}`}
                </h1>
                {/* <p className="text-grey-600 text-center px-5">
                    {categoryDisplayItem.description}
                </p> */}
            </div>
        </div>
    )
}

export default CarCategoryPage


// FOR CATEGORY 
function getCategoryNameByUrl(categoryNameUrl: string) {
    const category = carCategories.find(category => category.categoryNameUrl === categoryNameUrl);
    return category ? category.name : null;
}