import { z } from "zod"

export const carFormSchema = z.object({
    // title: z.string().min(3, 'Title must be at least 3 characters'),
    // description: z.string().min(3, 'Description must be at least 3 characters').max(400, 'Description must be less than 400 characters'),
    // location: z.string().min(3, 'Location must be at least 3 characters').max(400, 'Location must be less than 400 characters'),
    // imageUrl: z.string(),
    // startDateTime: z.date(),
    // endDateTime: z.date(),
    // categoryId: z.string(),
    // price: z.string(),
    // isFree: z.boolean(),
    // url: z.string().url(),



    make: z.string().min(2, 'Make must be at least 2 characters').max(30, 'Make must be less than 30 characters'),
    model: z.string().min(2, 'Model must be at least 2 characters').max(30, 'Model must be less than 30 characters'),
    year: z.string().min(4, 'Year must be 4 digit').max(4, 'Year must be 4 digit'),
    picturePath: z.string(),
    category: z.string(),
    seats: z.string().min(1, 'Seats must be 1 digit').max(1, 'Seats must be 1 digit'),
    rentalCostPerDay: z.string(),
    city_MPG: z.string().min(2, 'City MPG must be 2 digit').max(2, 'City MPG must be 2 digit'),
    highway_MPG: z.string().min(2, 'Highway MPG must be 2 digit').max(2, 'Highway MPG must be 2 digit'),
    combination_MPG: z.string().min(2, 'Combination MPG must be 2 digit').max(2, 'Combination MPG must be 2 digit'),
    fuelType: z.string().min(3, 'Fuel type must be at least 3 characters').max(20, 'Fuel type must be less than 20 characters'),
    drive: z.string().min(3, 'Drive must be at least 3 characters').max(12, 'drive must be less than 12 characters'),
    cylinders: z.string().min(1, 'Cylinders must be at least 1 digit').max(2, 'Cylinders must be less than 3 digit'),
    displacement: z.string(),
    transmission: z.string(),
    available_till: z.date(),
    // // rentEndDateTime: z.date(),
    // isFree: z.boolean(),
    // url: z.string().url(),

})