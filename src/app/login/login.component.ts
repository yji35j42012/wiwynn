import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
	selector: 'app-login',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './login.component.html',
	styleUrl: './login.component.scss'
})
export class LoginComponent {
	constructor(private router: Router) { }
	isForgot = false

	forgotHandlar() {
		// 登入頁忘記密碼按鈕
		this.isForgot = true
	}
	loginSubmit() {
		// 登入按鈕
		this.router.navigate(['/home']);
	}
	forgotSubmit() {
		// 忘記密碼的按鈕
		this.isForgot = false
		
	}
}
