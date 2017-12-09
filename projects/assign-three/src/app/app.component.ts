import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
		.wclr {
			color: white;
		}
  `]
})

export class AppComponent {
  title = 'app';
  showPara = true;
  items = [];
  count = 1;

  toggleVisibility() {
  	this.showPara = !this.showPara;
  }

  addItems() {
  	this.items.push(this.count++);
  }

  getBGColor(val: number) {
  	return val > 5 ? 'green' : 'grey';
  }
}
