import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-product',
  template: `
    <button (click)="toggle()">Show/Hide</button>
    <h2 *ngIf="toggler">I'm visible</h2>
  `,
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  toggler = false;

  constructor() { }

  ngOnInit() {
  }

  toggle(){
    // console.log(this.toggler)
    this.toggler = !this.toggler
  }

}
