import { carCategories } from '@/constants';
import { SearchParamProps } from '@/types';
import React from 'react'

const CarCategoryPage = ({ params: { id } }: SearchParamProps) => {
    const categoryName = getCategoryNameByUrl(id)
    console.log(`categoryName:`)
    console.log(categoryName)

    return (
        <div className='text-center'>
            <h1>{`Car Category ${categoryName}`}</h1>
        </div>
    )
}

export default CarCategoryPage


// FOR CATEGORY 
function getCategoryNameByUrl(categoryNameUrl: string) {
    const category = carCategories.find(category => category.categoryNameUrl === categoryNameUrl);
    return category ? category.name : null;
}