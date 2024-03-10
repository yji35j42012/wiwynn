import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-model-selcheck',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './model-selcheck.component.html',
	styleUrl: './model-selcheck.component.scss',
})
export class ModelSelcheckComponent {
	@Input() selectContent: any = {};
	@Output() selCheckShowEvent = new EventEmitter();
	@Output() selCheckEvent = new EventEmitter();

	selCheckHandler() {
		this.selCheckShowEvent.emit(this.selectContent.name);
	}
	itemCheck(name: string, i: number) {
		this.selCheckEvent.emit({
			name: name,
			id: i,
		});
	}
}
