import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface SearchManuFacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}


// ========================================================= evently

// ====== USER PARAMS
export type CreateUserParams = {
  clerkId: string
  firstName: string
  lastName: string
  username: string
  email: string
  photo: string
}

export type UpdateUserParams = {
  firstName: string
  lastName: string
  username: string
  photo: string
}

// ====== CAR PARAMS
export type CreateCarParams = {
  userId: string
  car: {
    make: string;
    model: string;
    year: string;
    picturePath: string;
    category: string;
    seats: string;
    rentalCostPerDay: string;
    city_MPG: string;
    highway_MPG: string;
    combination_MPG: string;
    fuelType: string;
    drive: string;
    cylinders: string;
    displacement?: string;
    transmission: string;
    available_till: Date;
  }
  path: string
}

export type UpdateCarParams = {
  userId: string
  car: {
    _id: string
    make: string;
    model: string;
    year: string;
    picturePath: string;
    category: string;
    seats: string;
    rentalCostPerDay: string;
    city_MPG: string;
    highway_MPG: string;
    combination_MPG: string;
    fuelType: string;
    drive: string;
    cylinders: string;
    displacement?: string;
    transmission: string;
    available_till: Date;
  }
  path: string
}

export type DeleteCarParams = {
  carId: string
  path: string
}

export type GetAllCarsParams = {
  query: string
  category: string
  limit: number
  page: number
}

export type GetCarsByUserParams = {
  userId: string
  limit?: number
  page: number
}

export type GetRelatedCarsByCategoryParams = {
  categoryId: string
  carId: string
  limit?: number
  page: number | string
}

export type Event = {
  _id: string
  title: string
  description: string
  price: string
  isFree: boolean
  imageUrl: string
  location: string
  startDateTime: Date
  endDateTime: Date
  url: string
  organizer: {
    _id: string
    firstName: string
    lastName: string
  }
  category: {
    _id: string
    name: string
  }
}

// ====== CATEGORY PARAMS
export type CreateCategoryParams = {
  categoryName: string
}

// ====== ORDER PARAMS
export type CheckoutOrderParams = {
  car: string
  carModelName: string
  rentalCost: string
  renter: string
}

export type CreateOrderParams = {
  stripeId: string
  car: string
  renter: string
  totalAmount: string
  rentedAt: Date
}

export type GetOrdersByCarParams = {
  carId: string
  searchString: string
}

export type GetOrdersByUserParams = {
  userId: string | null
  limit?: number
  page: string | number | null
}

// ====== URL QUERY PARAMS
export type UrlQueryParams = {
  params: string
  key: string
  value: string | null
}

export type RemoveUrlQueryParams = {
  params: string
  keysToRemove: string[]
}

export type SearchParamProps = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}