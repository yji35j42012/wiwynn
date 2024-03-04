import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-option-select',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './option-select.component.html',
	styleUrl: './option-select.component.scss'
})
export class OptionSelectComponent {
	@Input() selectContent: any = {}
	@Output() selEvent = new EventEmitter();
	option_sel(s: string) {
		this.selectContent.show = !this.selectContent.show
	}
	option_item(t: string, i: number) {		
		this.selectContent.txt = this.selectContent.lists[i].name
		this.selEvent.emit({ title: t, page: this.selectContent.lists[i].page })
	}
}