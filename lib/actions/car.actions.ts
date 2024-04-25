'use server'

import { CreateCarParams } from "@/types"
import { connectToDatabase } from "../database"
import User from "../database/models/user.model"
import Car from "../database/models/car.model"
import Category from "../database/models/category.model"
import { revalidatePath } from "next/cache"
import { handleError } from "../utils"

const populateCar = (query: any) => {
    return query
        .populate({ path: 'carBy', model: User, select: '_id firstName lastName' })
        .populate({ path: 'category', model: Category, select: '_id name' })
}

// CREATE
export async function createCar({ userId, car, path }: CreateCarParams) {
    try {
        await connectToDatabase()

        const carOwner = await User.findById(userId)
        if (!carOwner) throw new Error('Car owner not found')

        const newCar = await Car.create({ ...car, category: car.category, carBy: userId })
        revalidatePath(path)

        return JSON.parse(JSON.stringify(newCar))
    } catch (error) {
        handleError(error)
    }
}

// GET ONE CAR BY ID
export async function getCarById(carId: string) {
    try {
        await connectToDatabase()

        const car = await populateCar(Car.findById(carId))

        if (!car) throw new Error('Car not found')

        return JSON.parse(JSON.stringify(car))
    } catch (error) {
        handleError(error)
    }
}