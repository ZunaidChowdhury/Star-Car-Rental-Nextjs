import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { conn: null, promise: null };

console.log(`database/index/cached: ${cached}`);

export const connectToDatabase = async () => {
    if (cached.conn) {
        console.log(`Already connected to database. database/index/cached.conn: ${cached.conn}`);
        return cached.conn;
    }

    if (!MONGODB_URI) {
        console.log(`MONGODB_URI is missing`);
        throw new Error('MONGODB_URI is missing');
    }

    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
        dbName: 'star-car-rental',
        bufferCommands: false,
    })

    cached.conn = await cached.promise;

    console.log(`New connection to database. database/index/cached.conn: ${cached.conn}`);
    return cached.conn;
}