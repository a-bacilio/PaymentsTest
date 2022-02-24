import mongoose, {Document} from "mongoose"

const schema = mongoose.Schema;

export interface IProduct extends Document{

    name: string,
    price: number,
    stock: boolean,   
    image_url: string,
    description: string,
    category: string  
}



const productSchema = new schema ({

    name: String,
    price: Number,
    stock: Boolean,   
    image_url: String,
    description: String,
    category: String  //analgesico|antiflamatorio|miscelaneo|etc

})

export const productModel = mongoose.model<IProduct>('product', productSchema)

