import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
	selector: 'app-alert-mag',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './alert-mag.component.html',
	styleUrl: './alert-mag.component.scss'
})
export class AlertMagComponent {
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
