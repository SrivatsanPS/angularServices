import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  taskData = "";

  constructor( private child1Var: DataService ) { }

  ngOnInit() {
  }
  
  addTask(r) {
    this.child1Var.myArr.push(this.taskData);
    console.log(this.child1Var.myArr);
  }
}
