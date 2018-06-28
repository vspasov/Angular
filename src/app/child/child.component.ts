import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <section>
      <h2>child component</h2>
      <p>parent name: {{parentData}}</p>
      <p>parent name: {{userName}}</p>
      <button (click)="this.childEvent.emit('Hello from Child')">Emit Event</button>
    </section>    
  `,
  styleUrls:['./child.component.css']  
})
export class ChildComponent implements OnInit { 
  //mark  parentData as input data
  @Input() public parentData: string
  @Input('parentData') public userName : string
  @Output() public childEvent=new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

}
