import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-warroom-machine',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './warroom-machine.component.html',
	styleUrl: './warroom-machine.component.scss'
})
export class WarroomMachineComponent {
	@Input() machineEvent: any = {};
	@Output() closeEvent = new EventEmitter();

	alert_close(event: String) {
		this.closeEvent.emit(event);
	}
}
