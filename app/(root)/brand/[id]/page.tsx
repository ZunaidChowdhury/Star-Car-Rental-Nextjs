import { carCategories, manufacturers } from '@/constants'
import { SearchParamProps } from '@/types'
import React from 'react'

const SpecificCarBrandPage = ({ params: { id } }: SearchParamProps) => {
    const manufacturerName = getManufacturerNameByUrl(id)
    console.log(`manufacturerName:`)
    console.log(manufacturerName)

    return (
        <div className='text-center'>
            <h1>{`Car Brand ${manufacturerName}`}</h1>
        </div>
    )
}

export default SpecificCarBrandPage


function getManufacturerNameByUrl(manufacturerModelUrl: string) {
    const manufacturer = manufacturers.find(manufacturer => manufacturer.modelUrl === manufacturerModelUrl);
    return manufacturer ? manufacturer.name : null;
}


