import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule, Router, NavigationEnd } from '@angular/router';

@Component({
	selector: 'app-option-roleset',
	standalone: true,
	imports: [CommonModule, RouterOutlet, RouterModule,],
	templateUrl: './option-roleset.component.html',
	styleUrl: './option-roleset.component.scss'
})
export class OptionRolesetComponent {
	constructor(private router: Router) { }
	isEdit = false

	editRole() {
		this.isEdit = true
	}
}
