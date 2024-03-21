import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { RouterOutlet, RouterModule, Router } from '@angular/router';

@Component({
	selector: 'app-e-process',
	standalone: true,
	imports: [CommonModule, RouterOutlet, RouterModule],
	templateUrl: './e-process.component.html',
	styleUrl: './e-process.component.scss'
})
export class EProcessComponent {
	constructor(private router: Router, private location: Location) { }
	goBack() {
		this.location.back();
	}
}
