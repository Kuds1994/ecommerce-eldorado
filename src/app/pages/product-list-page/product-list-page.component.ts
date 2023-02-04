import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, distinctUntilChanged, fromEvent, map, switchMap } from 'rxjs';
import { ProductDummy } from 'src/app/core/models/product_dummy';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.css']
})
export class ProductListPageComponent {

  products: ProductDummy[] = [];
  @ViewChild('search', { static: true }) search!: ElementRef;

  constructor(private cartService: CartService, 
    private productService: ProductService,
    private route:ActivatedRoute) {

      

    //this.products = this.productService.getProducts1();


    }  
  
  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const id = params['category'];

      this.productService.getProductsByCategories(id).subscribe({
        next: (response: any) => {
  
          this.products = response
  
        }
      })
    })

  }

  addToCart(product: ProductDummy){

    this.cartService.addQtdToCart(product);
  
  }

}
