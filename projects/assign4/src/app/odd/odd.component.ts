import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'odd',
  templateUrl: './odd.component.html',
  styles: [`
    p {
      background-color:blue;
      color:white;
    }
  `]
})
export class OddComponent implements OnInit {

  @Input() value:number;

  constructor() { }

  ngOnInit() {
  }

}
