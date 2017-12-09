import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  nums:number[] = [];

  addNumber(val:number) {
    console.log('value = ' + val);
    this.nums.push(val);
  }
}
