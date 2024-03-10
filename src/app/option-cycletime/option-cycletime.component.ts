import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelSelectComponent } from '../model-select/model-select.component';
import { AlertDelmsgComponent } from '../alert-delmsg/alert-delmsg.component';

@Component({
	selector: 'app-option-cycletime',
	standalone: true,
	imports: [CommonModule, ModelSelectComponent, AlertDelmsgComponent],
	templateUrl: './option-cycletime.component.html',
	styleUrl: './option-cycletime.component.scss'
})
export class OptionCycletimeComponent {
	edit_alert = {
		state: '',
		isShow: false
	}
	editHandler(s: string) {
		this.edit_alert.state = s
		this.edit_alert.isShow = true
	}


	alertMsg = {
		show: false,
		title: '',
		msg: '',
		str: '',
	};
	delAlert() {
		this.alertMsg.show = true;
		this.alertMsg.title = '刪除欄位';
		this.alertMsg.msg = '您確定要刪除此欄位？';
		this.alertMsg.str = 'delmsg';
	}
	alert_del(e: any) { }
	alert_close(s: string) {
		switch (s) {
			case 'editAlert':
				this.edit_alert.isShow = false
				break;

			case 'delmsg':
				this.alertMsg.show = false
				break;
			default:
				break;
		}
	}
}
