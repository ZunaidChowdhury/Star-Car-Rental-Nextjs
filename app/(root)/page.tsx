import Image from "next/image";

import { SearchParamProps } from "@/types";
import { fuels, yearsOfProduction } from "@/constants";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import CustomFilter from "@/components/CustomFilter";
import CarCard from "@/components/CarCard";
import ShowMore from "@/components/ShowMore";
import { fetchCars } from "@/lib/utils";
import { getAllCars } from "@/lib/actions/car.actions";
import Collection from "@/components/shared/Collection";
import Search from "@/components/shared/Search";
import CategoryFilter from "@/components/shared/CategoryFilter";
import ImageSlider from "@/components/shared/ImageSlider";

export default async function Home({ searchParams }: SearchParamProps) {

  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';

  const cars = await getAllCars({
    query: searchText,
    category,
    page,
    limit: 6
  })

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
    <div className="overflow-hidden">

      {/* <Hero /> */}
      <div className="w-full  h-[75px] bg-black"></div>
      <ImageSlider
        title="Bangladesh's #1 Luxury Car Rental"
        subtitle="DRIVEN BY LUXURY"
        description="Rent your dream car on daily or hourly basis."
        titleColor="text-theme-primary"
        subtitleColor="text-white"
      />

      {/* CARS FOR RENT  */}
      <section id="cars" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold text-center">CARS FOR RENT</h2>

        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
          <CategoryFilter />
        </div>

        <Collection
          data={cars?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Cars"
          limit={6}
          page={page}
          totalPages={cars?.totalPages}
        />
      </section>

      {/* CAR CATALOG  */}
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        {/* Section Title and Description  */}
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        {/* Section Content  */}
        <div className="home__filters">

          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
          </div>

          {!isDataEmpty ? (
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
          )}

        </div>
      </div>
    </div>
  );
}
