import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { ProductDummy } from 'src/app/core/models/product_dummy';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { ProductService } from 'src/app/core/services/product/product.service'; 

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products: ProductDummy[] = [];

  constructor(private cartService: CartService, private productService: ProductService) { }
  
  
  ngOnInit(): void {

    //this.products = this.productService.getProducts1();
    this.productService.getProducts().subscribe({
      next: (response) =>{

        this.products = response

      }
    })

  }

  addToCart(product: ProductDummy){

    this.cartService.addQtdToCart(product);
  
  }

  
}
