import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
	selector: 'app-option-roleset-edit',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './option-roleset-edit.component.html',
	styleUrl: './option-roleset-edit.component.scss'
})
export class OptionRolesetEditComponent {
	constructor(private router: Router) { }
	cancelEdit() {
		this.router.navigate(['/home/Option/roleset/']);
	}
}
