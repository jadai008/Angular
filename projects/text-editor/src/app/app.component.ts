import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  		<h1>{{title}}</h1>
  		<text-editor (countEmit)="updateWordCount($event)"></text-editor>
  		<h2>Word Count:</h2><h1>{{wordCount}}</h1>
  		`,
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Simple Text Editor with word count display';
  wordCount: number = 0;
  updateWordCount(e:number): void {
  	this.wordCount = e;
  }
}
