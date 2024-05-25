import { Schema, model, models, Document } from 'mongoose'

export interface IOrder extends Document {
    stripeId: string
    car: {
        _id: string
        modelName: string
    }
    renter: {
        _id: string
        firstName: string
        lastName: string
    }
    totalAmount: string
    rentedAt: Date
}

export type IOrderItem = {
    _id: string
    carId: string
    carModelName: string
    totalAmount: string
    rentedAt: Date
    renter: string
}

const OrderSchema = new Schema({
    stripeId: {
        type: String,
        required: true,
        unique: true,
    },
    carId: {
        type: Schema.Types.ObjectId,
        ref: 'Car',
    },
    renterId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    totalAmount: {
        type: String,
    },
    rentedAt: {
        type: Date,
        default: Date.now,
    },
})

const Order = models.Order || model('Order', OrderSchema)

export default Order