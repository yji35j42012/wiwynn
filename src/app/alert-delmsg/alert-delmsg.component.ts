import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-alert-delmsg',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './alert-delmsg.component.html',
	styleUrl: './alert-delmsg.component.scss'
})
export class AlertDelmsgComponent {
	@Input() alertMsg: any = {};
	
	@Output() closeEvent = new EventEmitter();
	@Output() alertDel = new EventEmitter();

	alert_close(event: String) {
		this.closeEvent.emit(event);
	}
	alert_del(str: string) {
		this.alertDel.emit(str);
	}
}
