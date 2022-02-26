import mongoose, { Document } from "mongoose";

const schema = mongoose.Schema;

export interface IProduct extends Document {
  name: string;
  price: number;
  stock: number;
  image_url: string;
  description: string;
  category: string;
}

const productSchema = new schema({
  name: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
  },
  price: Number,
  stock: Number,
  image_url: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    lowercase: true,
    trim: true,
  },
  category: {
    type: String,
    lowercase: true,
    trim: true,
  }, //analgesico|antiflamatorio|miscelaneo|etc
});

export const productModel = mongoose.model<IProduct>("Product", productSchema);
