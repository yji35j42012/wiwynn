import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionCreatesecmenuComponent } from '../option-createsecmenu/option-createsecmenu.component';

@Component({
	selector: 'app-option-pageset',
	standalone: true,
	imports: [CommonModule, OptionCreatesecmenuComponent],
	templateUrl: './option-pageset.component.html',
	styleUrl: './option-pageset.component.scss'
})
export class OptionPagesetComponent {
	isEdit = false
	alertmenu = false //新增選單彈出視窗
	showSecList = false
	alertDel = false
	secMenuArr!: [{ chinese: string, english: string, menuweb: string }];


	alertsecmenu = false //新增第二層選單彈出視窗

	pagesetEdit() {
		this.isEdit = !this.isEdit
	}
	addMenu() {
		this.alertmenu = true
	}
	createSecMenu() {
		this.showSecList = true
		if (this.secMenuArr) {
			this.secMenuArr.push({ chinese: '', english: '', menuweb: '' })
		} else {
			this.secMenuArr = [{ chinese: '', english: '', menuweb: '' }]
		}
	}
	addSecMenu() {
		this.alertsecmenu = true
	}
	delHandler() {
		this.alertDel = true
	}
	del_check() {
		//確認刪除
	}
	alert_close(s: string) {
		switch (s) {
			case 'addmenu':
				this.alertmenu = false
				break;
			case 'addsecmenu':
				this.alertsecmenu = false
				break;
			case 'alertDel':
				this.alertDel = false
				break;
			default:
				break;
		}
	}
}
