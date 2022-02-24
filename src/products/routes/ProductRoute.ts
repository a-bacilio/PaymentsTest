import Router from "express";
import { addNewProduct, getProducts, getProductById, updateProduct , deleteProduct} from "../controllers/ProductController";


 const productRouter = Router();

 productRouter.post('/products', addNewProduct);

 productRouter.get('/products', getProducts)

 productRouter.get('/products/:id', getProductById)

 productRouter.put('/products/:id', updateProduct)

 productRouter.delete( '/products/:id',deleteProduct)

export default productRouter;