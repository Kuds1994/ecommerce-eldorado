import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Product } from 'src/app/core/models/product';
import { ProductDummy } from '../../models/product_dummy';
import { ProductDaoService } from './product-dao.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [{
    id: 1,
    description: "Item 1",
    value: 21,
    gender: "masculino",
    img: "https://cdn.shopify.com/s/files/1/0585/3653/products/VQ_MANCHESTER_0669_400x400.jpg?v=1663743997"
  },
  {
    id: 2,
    description: "Item 2",
    value: 50.55,
    gender: "masculino",
    img: "https://cdn.shopify.com/s/files/1/0585/3653/products/VQ_UTILITY_TSHIRT_ECOM_3615_400x400.jpg?v=1674060419"
  },
  {
    id: 3,
    description: "Item 3",
    value: 70.26,
    gender: "masculino",
    img: "https://cdn.shopify.com/s/files/1/0585/3653/products/VQ_UTILITY_TSHIRT_ECOM_3265copy_400x400.jpg?v=1674143387"
  },

  {
    id: 4,
    description: "Item 4",
    value: 70,
    gender: "masculino",
    img: "https://cdn.shopify.com/s/files/1/0585/3653/products/VQ_UTILITY_TSHIRT_ECOM_3355_400x400.jpg?v=1674059606"
  },
  {
    id: 5,
    description: "Item 5",
    value: 73.40,
    gender: "masculino",
    img: "https://cdn.shopify.com/s/files/1/0585/3653/products/VQ_UTILITY_TSHIRT_ECOM_3452copy_400x400.jpg?v=1674142353"
  },
  {
    id: 6,
    description: "Item 6",
    value: 90.26,
    gender: "masculino",
    img: "https://cdn.shopify.com/s/files/1/0585/3653/products/VQ_UTILITY_TSHIRT_ECOM_3086copy_400x400.jpg?v=1674143403"
  },
  {
    id: 7,
    description: "Item 7",
    value: 43.37,
    gender: "masculino",
    img: "https://cdn.shopify.com/s/files/1/0585/3653/products/VQ_UTILITY_TSHIRT_ECOM_3452copy_400x400.jpg?v=1674142353"
  },
  {
    id: 8,
    description: "Item 8",
    value: 51.11,
    gender: "masculino",
    img: "https://cdn.shopify.com/s/files/1/0585/3653/products/VQ_UTILITY_TSHIRT_ECOM_2821_400x400.jpg?v=1674058620"
  },{
    id: 9,
    description: "Item 9",
    value: 21,
    gender: "feminino",
    img: "https://cdn.shopify.com/s/files/1/0585/3653/products/VQ_UTILITY_WOMENS_ECOM_1672_400x400.jpg?v=1673356512"
  },
  {
    id: 10,
    description: "Item 10",
    value: 50.55,
    gender: "feminino",
    img: "https://cdn.shopify.com/s/files/1/0585/3653/products/VQ_UTILITY_WOMENS_ECOM_1944_400x400.jpg?v=1673622626"
  },
  {
    id: 11,
    description: "Item 11",
    value: 70.26,
    gender: "feminino",
    img: "https://cdn.shopify.com/s/files/1/0585/3653/products/VQ_UTILITY_WOMENS_ECOM_1805_400x400.jpg?v=1673619205"
  },

  {
    id: 12,
    description: "Item 12",
    value: 70,
    gender: "feminino",
    img: "https://cdn.shopify.com/s/files/1/0585/3653/products/VQ_BLACKFRIDAY_WOMENS22_1973_400x400.jpg?v=1668770456"
  },
  {
    id: 13,
    description: "Item 13",
    value: 73.40,
    gender: "feminino",
    img: "https://cdn.shopify.com/s/files/1/0585/3653/products/VQ_BLACKFRIDAY_WOMENS22_1646_400x400.jpg?v=1668768187"
  },
  {
    id: 14,
    description: "Item 14",
    value: 90.26,
    gender: "feminino",
    img: "https://cdn.shopify.com/s/files/1/0585/3653/products/VQ_BLACKFRIDAY_WOMENS22_1732_400x400.jpg?v=1668768162"
  },
  {
    id: 15,
    description: "Item 15",
    value: 43.37,
    gender: "feminino",
    img: "https://cdn.shopify.com/s/files/1/0585/3653/products/VQ_BLACKFRIDAY_WOMENS22_2245_400x400.jpg?v=1668769912"
  },
  {
    id: 16,
    description: "Item 16",
    value: 51.11,
    gender: "feminino",
    img: "https://cdn.shopify.com/s/files/1/0585/3653/products/VQ_BLACKFRIDAY_WOMENS22_2042_400x400.jpg?v=1668768317"
  }

  ]

  constructor(private productDaoService: ProductDaoService) { }


  getProducts() {
    return this.productDaoService.getProducs().pipe(
      map(source => {
        let list = source.products        
        .map((product: ProductDummy) => ({
          ...product
        }))
        return list;
      })
    )    
  }


  getProductByGender(gender: string){
  
    const products = this.products.filter(f => f.gender == gender)

    return products;
  
  }
  
  getProductById(id: number){
  
    return this.productDaoService.getProducsById(id).pipe(
      map(source => { 
        let productDummy: ProductDummy = {...source}   
        return productDummy
      })
    )
  }
}
