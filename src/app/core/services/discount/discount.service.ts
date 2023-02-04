import { Injectable } from '@angular/core';
import { Discount } from 'src/app/core/models/discount';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  list_discounts: Discount[] = [
    {name: "dis10", value: 0.1},
    {name: "dis20", value: 0.2},
    {name: "dis5", value: 0.05}
  ]

  getDiscount(): Discount[] {
    return this.list_discounts;
  }

  applyDiscount(value: string): Discount{
    
    return this.list_discounts.filter(d => d.name === value)[0]
 
  }

  constructor() { }
}
