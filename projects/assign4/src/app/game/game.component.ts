import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  counter:number = 1;

  startFunction;

  @Output('gameStarted') starter = new EventEmitter<number>(); 

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    console.log('starting game');
    this.startFunction = setInterval(() => this.starter.emit(this.counter++), 1000);
  }

  stopGame() {
    console.log('stopping game');
    clearInterval(this.startFunction);
  }

}
