import React from 'react'
import SearchBar from '../SearchBar'
import CustomFilter from '../CustomFilter'
import { fetchCars } from "@/lib/utils";
import { SearchParamProps } from '@/types';
import { fuels, yearsOfProduction } from "@/constants";
import CarCard from '../CarCard';
import ShowMore from '../ShowMore';

const CarCatalog = async({ searchParams }: SearchParamProps) => {
    const allCars = await fetchCars({
        manufacturer: searchParams.manufacturer as string || "",
        year: Number(searchParams.year) || 2022,
        fuel: searchParams.fuel as string || "",
        limit: Number(searchParams.limit) || 10,
        model: searchParams.model as string || "",
    });

    // console.log(allCars);
    const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

    return (
        <section>
            {/* CAR CATALOG  */}
            < div className="mt-12 padding-x padding-y max-width" id="discover" >
                {/* Section Title and Description  */}
                < div className="home__text-container" >
                    <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
                    <p>Explore the cars you might like</p>
                </div >
                {/* Section Content  */}
                < div className="home__filters" >

                    <SearchBar />

                    <div className="home__filter-container">
                        <CustomFilter title='fuel' options={fuels} />
                        <CustomFilter title='year' options={yearsOfProduction} />
                    </div>

                    {
                        !isDataEmpty ? (
                            <section>
                                <div className="home__cars-wrapper">
                                    {allCars?.map((car) => (
                                        <CarCard car={car} />
                                    ))}
                                </div>

                                <ShowMore
                                    pageNumber={(Number(searchParams.limit) || 10) / 10}
                                    isNext={(Number(searchParams.limit) || 10) > allCars.length}
                                />
                            </section>
                        ) : (
                            <div className="home__error-container">
                                <h2 className="text-black text-xl font-bold text-center">Oops, no results</h2>
                                <p>{allCars?.message}</p>
                            </div>
                        )
                    }

                </div >
            </div >
            {/* End of Car Catalog  */}
        </section>
    )
}

export default CarCatalog