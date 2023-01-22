import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { ProductService } from 'src/app/services/product/product.service';
import SwipeCore, {Pagination, Navigation} from "swiper"
import { SwiperComponent} from 'swiper/angular'

SwipeCore.use([Pagination,Navigation])

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CarouselComponent implements OnInit  {

  @Input() productsType: string = '';
  @Input() carouselTitle: string = '';

  products: Product[] = [];

  constructor(private productService: ProductService){
  }

  ngOnInit(): void {
    
    this.products = this.productService.getProductByGender(this.productsType)
    

  }

}
