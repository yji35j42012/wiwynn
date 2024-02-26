import { Component } from '@angular/core';
import { RouterOutlet, RouterModule, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
	selector: 'app-home',
	standalone: true,
	imports: [RouterOutlet, RouterModule, CommonModule],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss'
})
export class HomeComponent {
	menuShow = false;
	nowPage = "";
	constructor(private router: Router) {
		this.router.events.subscribe(event => {
			if (event instanceof NavigationEnd) {
				let s = event.url.split('/')
				let last = event.url.split('/').length - 1
				this.nowPage = s[last]
			}
		})
	}
	menuHandler() {
		this.menuShow = !this.menuShow
	}
	logoutHandler() {
		// 登出按鈕
		this.router.navigate(['/']);
	}
}
