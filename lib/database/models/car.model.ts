import { Schema, Types, model, models } from "mongoose";

export interface ICar extends Document{
    _id: string;
    carBy: { _id: string, firstName: string, lastName: string };
    make: string;
    model: string;
    year: string;
    // category: Types.ObjectId | string;
    picturePath: string;
    category: { _id: string, name: string }
    // model_class?: string;
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
    // isFree: boolean;
    // url: string;
}

const CarSchema = new Schema({
    carBy: { type: Schema.Types.ObjectId, ref: "User" },
    
    make: { type: String, required: true, min: 2, max: 20 },
    model: { type: String, required: true, min: 2, max: 50 },
    year: { type: String, required: true, min: 4, max: 4 },
    picturePath: { type: String, required: true },
    // name: { type: String, required: true, min: 2, max: 50 },
    // model_class: { type: String, max: 20 },
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    // category: { type: String, required: true },
    seats: { type: String, required: true, min: 1, max: 100 },
    rentalCostPerDay: { type: String, min: 4, max: 7 },
    city_MPG: { type: String, required: true, min: 1, max: 3 },
    highway_MPG: { type: String, required: true, min: 1, max: 3 },
    combination_MPG: { type: String, required: true, min: 1, max: 3 },
    fuelType: { type: String, required: true, min: 3, max: 10 },

    drive: { type: String, required: true, min: 1, max: 20 },
    cylinders: { type: String, required: true, min: 1, max: 3 },
    displacement: { type: String, min: 1, max: 3 },
    transmission: { type: String, required: true, min: 1, max: 20 },
    available_till: { type: Date, default: Date.now },

    
    // isFree: { type: Boolean },
    // url: { type: String },


},
    // { timestamps: true }
)

const Car = models.Car || model('Car', CarSchema);

export default Car;