import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../shared/products.service';


@Component({
  selector: 'app-product',
  template: `
    <li *ngFor="let product of getProducts()">
      <span>{{product.name}}</span> - <span>{{product.price}}</span>
      <button (click)="delete(product.name)">Delete</button>    
    </li>
  `,
  styles: [`
    li{
      display:block;
      width: 80%;
      border-bottom: 1px dotted gray;
      margin: 1em 0;     
    }
    li>button{
      float: right
    }
  `]
})
export class ProductComponent{
  products;

  constructor( private _productsService:ProductsService ){
    
  }
  getProducts(){
    return this._productsService.getProducts()
  }

  delete(name){
    this._productsService.deleteProduct(name)

  }

}
