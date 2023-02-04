import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { ProductDummy } from 'src/app/core/models/product_dummy';
import { AuthApiService } from 'src/app/core/services/auth/auth-api.service';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { ProductService } from 'src/app/core/services/product/product.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit  {

  product: ProductDummy = {
    id: 0,
    description: '',
    title: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category: '',
    thumbnail: '',
    images: []
  }; 

  constructor(
    private route:ActivatedRoute, 
    private productService:ProductService, 
    private cartService:CartService){

    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(Number(id)).subscribe({
      next: (response) =>{

        this.product = response

      },
      error: (error) =>{
        
      }});  
      
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

    
  }

  addToCart(product: ProductDummy, quantity: string){

    this.cartService.addQtdToCartWithQuantity(product, Number(quantity));
  
  }

}
