import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  	<div *ngFor="let val of values">
  		<h1 *ngIf="val.visible">{{val.text}}</h1>
  	</div>
  `,
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  values = [
  	{text: 'Halo1', visible: true},
  	{text: 'Halo2', visible: false},
  	{text: 'Halo3', visible: true},
  	{text: 'Halo4', visible: false},
  	{text: 'Halo5', visible: true},
  ];
}
