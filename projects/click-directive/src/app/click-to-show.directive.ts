import {Directive, HostListener} from '@angular/core';

@Directive({
	selector: '[click-h1]'
})


export class ClickToShowDirective {
	@HostListener('click', ['$event.target'])
	reveal(target): void {
		target.style['white-space'] = 'normal';
	}

}