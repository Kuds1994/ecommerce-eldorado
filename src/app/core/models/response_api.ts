import { ProductDummy } from "./product_dummy";

export interface ResponseAPI {
    products: ProductDummy[];
    product: ProductDummy;
}