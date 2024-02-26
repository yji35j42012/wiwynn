import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
	selector: 'app-model-select',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './model-select.component.html',
	styleUrl: './model-select.component.scss'
})
export class ModelSelectComponent {
	selectShow = false
	@Input() selectContent: any = {}
	selHandler() {
		this.selectShow = !this.selectShow
	}
	machineSel(value: string) {
		this.selectShow = !this.selectShow
		this.selectContent.title = value
	}
}
