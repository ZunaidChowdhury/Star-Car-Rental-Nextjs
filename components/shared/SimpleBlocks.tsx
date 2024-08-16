import React from 'react'
import { SimpleBlocksProps } from '@/types';

const SimpleBlocks = ({ data, layoutStyle }: SimpleBlocksProps) => {
    return (
        <div className='simple-block-container flex gap-4 flex-wrap justify-center w-full max-w-[1400px]'>
            {
                layoutStyle === 1 ? (
                    data.map(obj => (
                        <div className='w-[400px] h-[300px] bg-white flex flex-col justify-center items-center shadow-md transition-all hover:shadow-2xl'>
                            <div className='mb-6'>
                                {/* <CarsIcon width='60px' height='60px' color='#705CF5' /> */}
                                <obj.icon width='60px' height='60px' color='#705CF5' />
                                {/* <obj.icon /> */}
                            </div>
                            <h3 className='font-bold text-[22px] uppercase'>{obj.title}</h3>
                            <p className='px-10 text-center mt-3'>{obj.description}</p>
                        </div>
                    ))
                ) : (
                        data.map(obj => (
                        <div className='w-[400px] h-[200px] flex'>
                            <div className=''>
                                {/* <CarsIcon width='60px' height='60px' color='#705CF5' /> */}
                                <obj.icon width='80px' height='80px' color='#705CF5' />
                                {/* <obj.icon /> */}
                            </div>

                            <div className='ml-3'>
                                <h3 className='font-medium text-[18px] uppercase'>{obj.title}</h3>
                                <p className='mt-3 pr-6 text-gray-500'>{obj.description}</p>
                            </div>
                        </div>
                        ))
                )

            }
        </div>
    )
}

export default SimpleBlocks