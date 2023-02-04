import { Product } from "./product";
import { ProductDummy } from "./product_dummy";

export interface ProductCart extends ProductDummy {

    qtd: number;

}