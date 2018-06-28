import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {
  getProducts(){
    return [
      {
        "name": "apples",
        "price": 2.50
      },
      {
        "name": "oranges",
        "price": 1.80
      },
      {
        "name": "bananas",
        "price": 2.00
      }
    ]
  }
  constructor() { }
}
