import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <section>
      <h2>parent component</h2>      
      <app-child [parentData]="name" (childEvent)="respondToEvent($event)"></app-child>
      <hr>
      <div>{{msg}}</div>
    </section>
  `,
  styleUrls:['./parent.component.css']
})
export class ParentComponent implements OnInit { 
  // the data which will be sent to Child  as parentData property
  public name="ParentComponent"
  msg="Child is not emiting..."

  constructor() { }

  ngOnInit() {
  }

  respondToEvent(msg){
    console.log(msg)
    this.msg = msg
  }
}
