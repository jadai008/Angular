import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'even',
  templateUrl: './even.component.html',
  styles: [`
  p {
    background-color:green;
    color:white;
  }
`]
})
export class EvenComponent implements OnInit {

  @Input() value:number;

  constructor() { }

  ngOnInit() {
  }

}
