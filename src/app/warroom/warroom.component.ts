import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarroomLineComponent } from '../warroom-line/warroom-line.component';
import { WarroomMachineComponent } from '../warroom-machine/warroom-machine.component';
import { AlertMsgComponent } from '../alert-msg/alert-msg.component';
import { ModelSelectComponent } from '../model-select/model-select.component';
@Component({
	selector: 'app-warroom',
	standalone: true,
	imports: [CommonModule, WarroomLineComponent, WarroomMachineComponent, AlertMsgComponent, ModelSelectComponent],
	templateUrl: './warroom.component.html',
	styleUrl: './warroom.component.scss'
})
export class WarroomComponent {
	constructor(private el: ElementRef) { }
	machineSelect = {
		title: "變更機台顯示名稱",
		lists: ['機台顯示名稱1', '機台顯示名稱2']
	}
	newLintSelect = {
		title: "S-6 / YV3.5 CONVERTER BOARD",
		lists: ['S-6 / YV3.5 CONVERTER BOARD', 'S-7 / YV3.5 CONVERTER BOARD', 'S-8 / YV3.5 CONVERTER BOARD']
	}
	newLintSelect1 = {
		title: "S-7 / YV3.5 CONVERTER BOARD",
		lists: ['S-6 / YV3.5 CONVERTER BOARD', 'S-7 / YV3.5 CONVERTER BOARD', 'S-8 / YV3.5 CONVERTER BOARD']
	}
	newLintSelect2 = {
		title: "S-8 / YV3.5 CONVERTER BOARD",
		lists: ['S-6 / YV3.5 CONVERTER BOARD', 'S-7 / YV3.5 CONVERTER BOARD', 'S-8 / YV3.5 CONVERTER BOARD']
	}
	selectTitle = "變更機台顯示名稱"
	isEdit = false //切換成編輯模式
	newMachine = false
	newLine = false
	alertMsg = {
		show: false,
		title: "",
		msg: "",
		str: ""
	}
	// msgShow = false
	machineDetail = false
	showLine = false
	machineEvent = {
		show: false,
		class: false
	}
	lineEvent = {
		show: false,
		class: false,
		num: -1,
	}
	// selHandler() {
	// 	this.selectShow = !this.selectShow
	// }
	// machineSel(value: string) {
	// 	this.selectTitle = value
	// 	this.selectShow = false
	// }
	editHandler() {
		this.isEdit = true
	}
	cancleHandler() {
		this.isEdit = false
	}
	addMachine(event: Event) {
		event.stopPropagation();
		this.newMachine = true
	}
	addLine() {
		this.newLine = true
	}
	saveLine() {
		this.newLine = false
		this.alertMsg.show = true
		this.alertMsg.title = "儲存生產線編輯"
		this.alertMsg.msg = "您確定要儲存變更？"
		this.alertMsg.str = "line"
	}
	machine(event: Event) {
		event.stopPropagation();
		if (this.isEdit) { return }
		this.machineEvent.show = true
		setTimeout(() => {
			this.machineEvent.class = true
		}, 10);
	}
	line(num: number) {
		if (this.isEdit) { return }
		this.lineEvent.num = num
		let itemBox = this.el.nativeElement.querySelector('.warroom_body');
		let itemFirst = this.el.nativeElement.querySelectorAll('.warroom_machine')[0];
		let item = this.el.nativeElement.querySelectorAll('.warroom_machine')[num];
		item.style.transform = `translateY(-${item.offsetTop - itemFirst.offsetTop - itemBox.scrollTop}px)`;
		this.alert_close('machine');
		this.lineEvent.show = true
		setTimeout(() => {
			this.lineEvent.class = true
		}, 10);
	}
	alert_close(value: string) {
		switch (value) {
			case "newMachine":
				this.newMachine = false
				break;
			case "newLine":
				this.newLine = false
				break;
			case "msg":
				this.alertMsg.show = false
				break;
			case "machine":
				this.machineEvent.class = false
				setTimeout(() => {
					this.machineEvent.show = false
				}, 500);
				break;
			case "line":
				this.lineEvent.class = false
				let item = this.el.nativeElement.querySelectorAll('.warroom_machine')[this.lineEvent.num]
				item.style.transform = `translateY(0px)`
				setTimeout(() => {
					this.lineEvent.show = false
				}, 500);
				break;
			default:
				break;
		}
	}
	getEvent(event: String) {
		console.log('event', event);
	}
	alertCheck(event: String) {
		this.alert_close('msg')
		console.log(event + '按了確定');

	}
}
