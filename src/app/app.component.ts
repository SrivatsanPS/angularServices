import { Component, Input, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ DataService ]
})
export class AppComponent {
  myArr2 = [];

  addTask (info) {
    this.myArr2.push (info);
  }

  constructor ( private appVar: DataService ) { }
  ngOnInit() {
   
  }

}
