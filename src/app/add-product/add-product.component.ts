import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsService } from "../shared/products.service";

@Component({
  selector: 'app-add-product',
  template:`
    <section class="add-product">
      <label>product name: <input type="text" #pname></label>
      <label>product price: <input type="text" #pprice></label>
      <button (click)="addProduct(pname.value, pprice.value)">Add Product</button>
    </section>
  `,
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  constructor(private _productsService: ProductsService) { }

  ngOnInit() {
  }

  addProduct(name, price){    
    this._productsService.addProduct({
      "name": name, 
      "price": price
    })

  }
}
