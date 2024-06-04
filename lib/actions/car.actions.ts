'use server'

import { CreateCarParams, DeleteCarParams, GetAllCarsParams, GetCarsByUserParams, GetRelatedCarsByCategoryParams, UpdateCarParams } from "@/types"
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

const getCategoryByName = async (name: string) => {
    return Category.findOne({ name: { $regex: name, $options: 'i' } })
  }
// GET ONE CAR BY ID
export async function getAllCars({ query, limit = 6, page, category }: GetAllCarsParams) {
    try {
        await connectToDatabase()

        const titleCondition = query ? { model: { $regex: query, $options: 'i' } } : {}
        const categoryCondition = category ? await getCategoryByName(category) : null
        const conditions = {
            $and: [titleCondition, categoryCondition ? { category: categoryCondition._id } : {}],
        }

        const skipAmount = (Number(page) - 1) * limit
        const carsQuery = Car.find(conditions)
            .sort({ createdAt: 'desc' })
            .skip(skipAmount)
            .limit(limit)

        const cars = await populateCar(carsQuery)
        const carsCount = await Car.countDocuments(conditions)

        return {
            data: JSON.parse(JSON.stringify(cars)),
            totalPages: Math.ceil(carsCount / limit),
        }
    } catch (error) {
        handleError(error)
    }
}

// UPDATE
export async function updateCar({ userId, car, path }: UpdateCarParams) {
    try {
        await connectToDatabase()

        const carToUpdate = await Car.findById(car._id)
        if (!carToUpdate || carToUpdate.carBy.toHexString() !== userId) {
            throw new Error('Unauthorized or car not found')
        }

        const updatedCar = await Car.findByIdAndUpdate(
            car._id,
            { ...car, category: car.category },
            { new: true }
        )
        revalidatePath(path)

        return JSON.parse(JSON.stringify(updatedCar))
    } catch (error) {
        handleError(error)
    }
}

// DELETE
export async function deleteCar({ carId, path }: DeleteCarParams) {
    try {
        await connectToDatabase()

        const deletedCar = await Car.findByIdAndDelete(carId)
        if (deletedCar) revalidatePath(path)
    } catch (error) {
        handleError(error)
    }
}

// GET RELATED EVENTS: EVENTS WITH SAME CATEGORY
export async function getRelatedCarsByCategory({
    categoryId,
    carId,
    limit = 3,
    page = 1,
}: GetRelatedCarsByCategoryParams) {
    try {
        await connectToDatabase()

        const skipAmount = (Number(page) - 1) * limit
        const conditions = { $and: [{ category: categoryId }, { _id: { $ne: carId } }] }

        const carsQuery = Car.find(conditions)
            .sort({ createdAt: 'desc' })
            .skip(skipAmount)
            .limit(limit)

        const cars = await populateCar(carsQuery)
        const carsCount = await Car.countDocuments(conditions)

        return { data: JSON.parse(JSON.stringify(cars)), totalPages: Math.ceil(carsCount / limit) }
    } catch (error) {
        handleError(error)
    }
}

// GET CARS BY USER
export async function getCarsByUser({ userId, limit = 6, page }: GetCarsByUserParams) {
    try {
        await connectToDatabase()

        const conditions = { carBy: userId }
        const skipAmount = (page - 1) * limit

        const carsQuery = Car.find(conditions)
            .sort({ createdAt: 'desc' })
            .skip(skipAmount)
            .limit(limit)


        const cars = await populateCar(carsQuery)

        const carsCount = await Car.countDocuments(conditions)

        return { data: JSON.parse(JSON.stringify(cars)), totalPages: Math.ceil(carsCount / limit) }
    } catch (error) {
        handleError(error)
    }
}