import { Schema, Types, model, models } from "mongoose";

export interface ICar extends Document{
    _id: string;
    carBy: { _id: string, firstName: string, lastName: string };
    rentalCostPerDay: number;
    // category: Types.ObjectId | string;
    category: { _id: string, name: string }
    modelName: string;
    model_class?: string;
    picturePath: string;
    city_MPG: number;
    combination_MPG: number;
    cylinders: number;
    displacement?: number;
    drive: string;
    fuelType: string;
    highway_MPG: number;
    make: string;
    year: number;
    seats: number;
    transmission: string;
}

const CarSchema = new Schema({
    carBy: { type: Schema.Types.ObjectId, ref: "User" },
    rentalCostPerDay: { type: Number, required: true, min: 4, max: 7 },
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    modelName: { type: String, required: true, min: 2, max: 50 },
    // name: { type: String, required: true, min: 2, max: 50 },
    model_class: { type: String, max: 20 },
    // category: { type: String, required: true },
    picturePath: { type: String, required: true },
    city_MPG: { type: Number, required: true, min: 1, max: 3 },
    combination_MPG: { type: Number, required: true, min: 1, max: 3 },
    cylinders: { type: Number, required: true, min: 1, max: 3 },
    displacement: { type: Number, min: 1, max: 3 },
    drive: { type: String, required: true, min: 1, max: 20 },
    fuelType: { type: String, required: true, min: 3, max: 10 },
    highway_MPG: { type: Number, required: true, min: 1, max: 3 },
    make: { type: String, required: true, min: 2, max: 20 },
    year: { type: Number, required: true, min: 4, max: 4 },
    seats: { type: Number, required: true, min: 1, max: 100 },
    transmission: { type: String, required: true, min: 1, max: 20 },
},
    // { timestamps: true }
)

const Car = models.Car || model('Car', CarSchema);

export default Car;