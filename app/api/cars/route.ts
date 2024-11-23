import { connectToDatabase } from "@/lib/database";
import Car from "@/lib/database/models/car.model";
import Category from "@/lib/database/models/category.model";
import User from "@/lib/database/models/user.model";
import { handleError } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";
export async function GET() {

    try {
        await connectToDatabase()   
        const cars = await Car.find();
        return NextResponse.json(cars);
    } catch (error) {
        handleError(error)
    }


}










































