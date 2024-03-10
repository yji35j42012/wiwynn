import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertDelmsgComponent } from '../alert-delmsg/alert-delmsg.component';

@Component({
	selector: 'app-option-model',
	standalone: true,
	imports: [CommonModule, AlertDelmsgComponent],
	templateUrl: './option-model.component.html',
	styleUrl: './option-model.component.scss'
})
export class OptionModelComponent {
	edit_alert = {
		state: '',
		isShow: false
	}
	alertMsg = {
		show: false,
		title: '刪除產品Model/良率/UPH註冊',
		msg: '您確定要刪除此產品Model/良率/UPH註冊？',
		str: 'delmsg',
	};
	editAlert(s: string) {
		this.edit_alert.state = s
		this.edit_alert.isShow = true
	}
	delHandler() {
		this.alertMsg.show = true;
	  }
	alert_del(e: Event) {
		// 確認刪除事件
	}
	alert_close(s: string) {
		switch (s) {
			case 'editAlert':
				this.edit_alert.isShow = false
				break;
			case 'delmsg':
				this.alertMsg.show = false;
				break;
			default:
				break;
		}
	}
}
