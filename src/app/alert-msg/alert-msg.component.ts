import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
	selector: 'app-alert-mag',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './alert-msg.component.html',
	styleUrl: './alert-msg.component.scss'
})
export class AlertMsgComponent {
	@Input() alertMsg: any = {};
	@Output() closeEvent = new EventEmitter();
	@Output() alertCheck = new EventEmitter();
	alert_close(event: String) {
		this.closeEvent.emit(event);
	}
	alert_check(str: string) {
		this.alertCheck.emit(str);
	}
}
