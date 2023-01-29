import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map, switchMap } from 'rxjs';
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
  @ViewChild('search', { static: true }) search!: ElementRef;

  constructor(private cartService: CartService, private productService: ProductService) { }
  
  
  ngOnInit(): void {

    //this.products = this.productService.getProducts1();
    this.productService.getProducts().subscribe({
      next: (response) =>{

        this.products = response

      }
    })

    fromEvent(this.search.nativeElement, 'input')
    .pipe(
      map((event: any) => event.target.value),
      // mergeMap((value: string) => this.productsService.searchProducts(value))
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((value: string) => this.productService.getProductsByName(value))
    ).subscribe((data: any) => {

      this.products = data.products
    })

  }

  addToCart(product: ProductDummy){

    this.cartService.addQtdToCart(product);
  
  }

  
}
