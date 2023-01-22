import { ProductCart } from "./products_cart";

export interface Cart {

    products: ProductCart[];
    total: number;
    subtotal: number;
    discount: number;
    
}