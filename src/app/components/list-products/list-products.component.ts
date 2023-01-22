import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service'; 

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private cartService: CartService, private productService: ProductService) { }
  
  
  ngOnInit(): void {

    this.products = this.productService.getProducts();

  }

  addToCart(product: Product){

    this.cartService.addQtdToCart(product);
  
  }

  
}
