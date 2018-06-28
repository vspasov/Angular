import { Injectable } from '@angular/core';
import { AppComponent } from "../app.component";

@Injectable({
  'providedIn': 'root'
  })
export class ProductsService {
  private products:any[]

  constructor() { 
    this.products = this.fetchProducts();
  }

  getProducts(){
    return this.products;
  }

  fetchProducts(){
    return [
      {
        "id": 1,
        "name": "apples",
        "price": 2.50
      },
      {
        "id": 2,
        "name": "oranges",
        "price": 1.80
      },
      {
        "id": 3,
        "name": "bananas",
        "price": 2.00
      }
    ]
  }

  addProduct(product) {    
    this.products.push(product);    
    console.log("products after ADD: ", this.products);
  }

  deleteProduct(name) {
    console.log("name: ", name)
    this.products = this.products.filter( obj => obj.name !== name )
    console.log("products after DELETE: ", this.products);
  }

  editProduct() {}
}
