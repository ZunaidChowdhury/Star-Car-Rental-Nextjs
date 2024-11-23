import { connectToDatabase } from "@/lib/database";
import Car from "@/lib/database/models/car.model";
import Category from "@/lib/database/models/category.model";
import User from "@/lib/database/models/user.model";
import { handleError } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    // console.log(params.id);

    const populateCar = (query: any) => {
        return query
        .populate({ path: 'carBy', model: User, select: '_id firstName lastName' })
        .populate({ path: 'category', model: Category, select: '_id name' })
    }

    try {
        await connectToDatabase()
        const car = await populateCar(Car.findById(params.id))
        if (!car) throw new Error('Car not found')
        // return JSON.parse(JSON.stringify(car))
        return NextResponse.json(car);
    } catch (error) {
        handleError(error)
    }


}