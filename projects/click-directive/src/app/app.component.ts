import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  		<h1 click-h1>{{title}}</h1>
  		<h2 click-h1>{{title}}</h2>
  `,
  styles: [`
  		h1, h2 {
  			text-overflow: ellipsis;
  			overflow: hidden;
  			white-space: nowrap;
  			max-width: 300px;
  		}

  `]
})
export class AppComponent {
  title = 'This is a very big and long title just to demonstrate a directive';
}
