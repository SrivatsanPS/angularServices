import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor( private childVar2: DataService) { }
  myArr2 = this.childVar2.myArr;
  taskFinished(e){
    e.style.textDecoration = 'line-through';
  }

  ngOnInit() {
  }

}
