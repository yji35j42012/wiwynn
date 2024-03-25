import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
@Component({
	selector: 'app-warroom',
	standalone: true,
	imports: [CommonModule, RouterOutlet, RouterModule],
	templateUrl: './warroom.component.html',
	styleUrl: './warroom.component.scss'
})
export class WarroomComponent {
	constructor(private router: Router) { }
	isNormal = true

	ngDoCheck() {
		const currentRoute = this.router.url;
		let s = currentRoute.split('/');
		let last = s.length - 1;
		if (s[last] == 'overview') {
			this.isNormal = false
		} else {
			this.isNormal = true
		}
	}
	warroomTab(b: boolean) {
		this.isNormal = b
		b ? this.router.navigate(['/home/Warroom']) : this.router.navigate(['/home/Warroom/overview'])
	}
}
