import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-option-roleset',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './option-roleset.component.html',
	styleUrl: './option-roleset.component.scss'
})
export class OptionRolesetComponent {
	isEdit = false

	editRole(){
		this.isEdit=true
	}
}
