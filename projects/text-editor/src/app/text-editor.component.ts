import {Component} from '@angular/core';
import {Output} from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
	selector: 'text-editor',
	template: '<textarea on-keyup="emitWordCount($event)"></textarea>',
	styles: [`
		textarea {
			width: 750px;
			height: 300px;
			border: 1px solid black;
		}
	`]
})



export class TextEditorComponent {
	wordCount: number;

	@Output() countEmit = new EventEmitter<number>();

	emitWordCount(e:Event):void {
		this.wordCount = (<HTMLInputElement>e.target).value.split(' ').length;
		this.countEmit.emit(this.wordCount);
	}
}
