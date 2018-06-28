import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  template:`    
    <section>
      <h2>Products Component</h2>
      <ul>
        <app-product></app-product>
      </ul>
      <hr>
      <app-add-product></app-add-product>  
      <app-edit-product></app-edit-product>
    </section>`,
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }
  ngOnInit() {}  
}
