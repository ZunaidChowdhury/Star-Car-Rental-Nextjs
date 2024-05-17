import { ICar } from '@/lib/database/models/car.model'
import React from 'react'
import Card from './Card'

type CollectionProps = {
    data: ICar[],
    emptyTitle: string,
    emptyStateSubtext: string,
    limit: number,
    page: number | string,
    totalPages?: number,
    urlParamName?: string,
    collectionType?: 'Cars_Added' | 'My_Cars' | 'All_Cars'
}

const Collection = ({
    data,
    emptyTitle,
    emptyStateSubtext,
    page,
    totalPages = 0,
    collectionType,
    urlParamName,
}: CollectionProps) => {
    return (
        <>
            {data.length > 0 ? (
                <div className="flex flex-col items-center gap-10">
                    <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
                        {data.map((car) => {
                            const hasOrderLink = collectionType === 'Cars_Added';
                            const hidePrice = collectionType === 'My_Cars';

                            return (
                                <li key={car._id} className="flex justify-center">
                                    <Card car={car} hasOrderLink={hasOrderLink} hidePrice={hidePrice} />
                                </li>
                            )
                        })}
                    </ul>

                    {/* {totalPages > 1 && (
                        <Pagination urlParamName={urlParamName} page={page} totalPages={totalPages} />
                    )} */}
                </div>
            ) : (
                <div className="flex-center wrapper min-h-[200px] w-full flex-col gap-3 rounded-[14px] bg-grey-50 py-28 text-center">
                    <h3 className="p-bold-20 md:h5-bold">{emptyTitle}</h3>
                    <p className="p-regular-14">{emptyStateSubtext}</p>
                </div>
            )}
        </>
    )
}

export default Collection