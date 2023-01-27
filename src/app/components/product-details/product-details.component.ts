import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { Product } from 'src/app/core/models/product';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { ProductService } from 'src/app/core/services/product/product.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit  {

  product!: Product; 

  constructor(private route:ActivatedRoute, private productService:ProductService, private cartService:CartService){

  }

  qtd = 1

  addQtd(){

    this.qtd += 1

  }

  rmvQtd(){
     
    if(this.qtd > 1)
      this.qtd -= 1

  }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    this.product = this.productService.getProductById(Number(id))!
  
  }

  addToCart(product: Product, quantity: string){

    this.cartService.addQtdToCartWithQuantity(product, Number(quantity));
  
  }

}
