import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionCreatesecmenuComponent } from '../option-createsecmenu/option-createsecmenu.component';
import { AlertDelmsgComponent } from '../alert-delmsg/alert-delmsg.component';

@Component({
	selector: 'app-option-pageset',
	standalone: true,
	imports: [CommonModule, OptionCreatesecmenuComponent,AlertDelmsgComponent],
	templateUrl: './option-pageset.component.html',
	styleUrl: './option-pageset.component.scss'
})
export class OptionPagesetComponent {
	isEdit = false
	alertmenu = false //新增選單彈出視窗
	showSecList = false
	secMenuArr!: [{ chinese: string, english: string, menuweb: string }];


	alertsecmenu = false //新增第二層選單彈出視窗
	alertMsg = {
		show: false,
		title: "",
		msg: "",
		str: ""
	}
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
		this.alertMsg.show = true
		this.alertMsg.title = '刪除選單'
		this.alertMsg.msg = '您確定要刪除此選單？'
		this.alertMsg.str = 'delMenu'
	}
	alert_del(e: Event) {
		// 確認刪除事件
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
				this.alertMsg.show = false
				break;
			default:
				break;
		}
	}
}
