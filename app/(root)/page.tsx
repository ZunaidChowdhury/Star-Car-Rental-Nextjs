import { SearchParamProps } from "@/types";

import { getAllCars } from "@/lib/actions/car.actions";
import Collection from "@/components/shared/Collection";
import Search from "@/components/shared/Search";
import CategoryFilter from "@/components/shared/CategoryFilter";
import ImageSlider from "@/components/shared/ImageSlider";
import CategoryDisplay from "@/components/shared/CategoryDisplay";
import LogoCarousel from "@/components/shared/LogoCarousel";
import CarCatalog from "@/components/shared/CarCatalog";
import SimpleBlocks from "@/components/shared/SimpleBlocks";
import CarsIcon from "@/components/icons/CarsIcon";
import CallCenterIcon from "@/components/icons/CallCenterIcon";
import FastDeliveryIcon from "@/components/icons/FastDeliveryIcon";
import DollarIcon from "@/components/icons/DollarIcon";
import ForBooking from "@/components/shared/ForBooking";

// datas 
const imagesSlide1 = [
  '/mine/cars/slide1/img1.jpg',
  '/mine/cars/slide1/img2.jpg',
  '/mine/cars/slide1/img3.jpg',
  '/mine/cars/slide1/img4.jpg',

];

const carLogos = [
  '/car-brand-logos/audi.png',
  '/car-brand-logos/bentley.png',
  '/car-brand-logos/ferrari.png',
  '/car-brand-logos/lamborghini.png',
  '/car-brand-logos/land_rover.png',
  '/car-brand-logos/maserati.png',
  '/car-brand-logos/mclaren.png',
  '/car-brand-logos/mercedes.png',
  '/car-brand-logos/porsche.png',
  '/car-brand-logos/rolls_royce.png',
];

const simpleBlockData = [
  {
    icon: FastDeliveryIcon,
    title: "Free Delivery",
    description: "We deliver the car to any hotel in Dubai, free of charge.",
  },

  {
    icon: CallCenterIcon,
    title: "Online Booking",
    description: "You can book directly online or via whatsapp.",
  },

  {
    icon: CarsIcon,
    title: "Huge Fleet",
    description: "We have more than 250+ sports, luxury and economy cars to choose from.",
  },
];

const simpleBlockData_2 = [
  {
    icon: DollarIcon,
    title: "Free Pick Up and Drop",
    description: "We offer free pick-up and drop-off for your luxury car rental anywhere across Bangladesh.",
  },

  {
    icon: DollarIcon,
    title: "24/7 Roadside Assistance",
    description: "Our highly experienced team is available around the clock to offer unparalleled assistance.",
  },

  {
    icon: DollarIcon,
    title: "Easy Booking Process",
    description: "We offer hassle-free online booking with minimal documents. It is applicable to both BD residents and tourists.",
  },

  {
    icon: DollarIcon,
    title: "Well Maintained Cars",
    description: "Each car at our Dubai sports car rental goes through a comprehensive check to ensure they are in mint condition.",
  },

  {
    icon: DollarIcon,
    title: "Professional Staff",
    description: "At our luxury car rental Dubai, we employ staff with extensive knowledge and hands-on expertise to provide you with the right car.",
  },

  {
    icon: DollarIcon,
    title: "Excellent Prices",
    description: "We guarantee competitive and affordable pricing.",
  },

];

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
  // console.log("home/cars: ")
  // console.log(cars)



  return (
    <div className="overflow-hidden">

      {/* <Hero /> */}
      {/* Slider1  */}
      <ImageSlider
        images={imagesSlide1}
        title="Bangladesh's #1 Luxury Car Rental"
        subtitle="DRIVEN BY LUXURY"
        description="Rent your dream car on daily or hourly basis."
        titleColor="text-theme-primary"
        subtitleColor="text-white"
      />

      {/* CARS FOR RENT  */}
      <section id="cars" className="wrapper mt-[100px] flex flex-col gap-8 md:gap-12 justify-center items-center">
        <div className="text-center">
          <h2 className="font-extrabold text-[70px]">FLEET OF 250+ CARS</h2>
          <p className="text-grey-500 max-w-[750px]">Providing the best competitive rates in the market due to having ownership of all our cars.
            We Offer High-End New Cars, Full option Vehicles.</p>
        </div>

        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search placeholder="Search Cars ..." />
          <CategoryFilter />
        </div>

        <Collection
          data={cars?.data}
          emptyTitle="No Cars Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Cars"
          limit={6}
          page={page}
          totalPages={cars?.totalPages}
        />
      </section>

      <section className="mt-[150px]">
        <LogoCarousel images={carLogos} />
      </section>

      {/* Slider2  */}
      <section className="mt-[150px]">
        <ImageSlider
          images={imagesSlide1}
          title="GET UP TO 80% OFF ALL CARS"
          subtitle=""
          description="Enjoy seasonal discounts for a limited time only."
          titleColor="text-theme-primary"
          subtitleColor="text-white"
        />
      </section>

      <section className="wrapper mt-[150px] flex flex-col gap-8 md:gap-12 justify-center items-center">
        <div className="text-center">
          <h2 className="font-extrabold text-[70px]">CATEGORIES</h2>
          <p className="text-grey-500 max-w-[700px]">Providing the best competitive rates in the market due to having ownership of all our cars.
            We Offer High-End New Cars, Full option Vehicles.</p>
        </div>
        <CategoryDisplay />
      </section>

      <section className="mt-[150px] flex flex-col gap-8 md:gap-12 justify-center items-center">
        <div className="text-center">
          <h2 className="font-extrabold text-[70px]">DRIVE SUPERIOR</h2>
          <p className="text-grey-500 max-w-[800px]">We offer a hassle free car rental service. Book your car online and we deliver it to your doorstep.</p>
        </div>

        <SimpleBlocks data={simpleBlockData} layoutStyle={1} />
      </section>

      {/* Slider3  */}
      <section className="mt-[150px] mb-[80px]">
        <ImageSlider
          images={imagesSlide1}
          title="DRIVE YOUR DREAM CAR TODAY"
          subtitle="100+ Sports & Luxury cars"
          description="Rent a sports or luxury car , delivered directly to your hotel in Bangladesh"
          titleColor="text-theme-primary"
          subtitleColor="text-white"
        />
      </section>

      <section className="pt-[80px] pb-[30px] flex flex-col gap-8 md:gap-12 justify-center items-center bg-gray-200">
        <div className="text-center">
          <h2 className="font-extrabold text-[50px]">What Makes Us Different?</h2>
          {/* <p className="text-grey-500 max-w-[800px]">We offer a hassle free car rental service. Book your car online and we deliver it to your doorstep.</p> */}
        </div>

        <SimpleBlocks data={simpleBlockData_2} layoutStyle={2} />
      </section>

      <ForBooking/>

      {/* <CarCatalog searchParams={searchParams} params={{id: ""}}/> */}

    </div>
  );
}
