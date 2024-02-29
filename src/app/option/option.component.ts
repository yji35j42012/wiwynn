import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
	selector: 'app-option',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './option.component.html',
	styleUrl: './option.component.scss'
})



export class OptionComponent {
	constructor(private el: ElementRef) { }
	permissions_sel = {
		title: "權限設定",
		lists: ['權限設定', '頁面設定', '角色設定'],
		show: false,
		txt: "權限設定",
		on: true
	}
	ngOnInit(): void {

	}
	option_sel(s: string) {
		switch (s) {
			case 'permissions':
				this.permissions_sel.show = !this.permissions_sel.show
				break;

			default:
				break;
		}
		console.log('this', s);

	}
	option_item(s: string) {
		this.permissions_sel.txt = s
	}

	alert_close(s: string) {

	}
}
