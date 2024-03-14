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
		name: 'machineSelect',
		title: "變更機台顯示名稱",
		lists: ['機台顯示名稱1', '機台顯示名稱2'],
		isShow: false,
		msg: '',
	}
	newLintSelect = {
		name: 'newLintSelect',
		title: "S-6 / YV3.5 CONVERTER BOARD",
		lists: ['S-6 / YV3.5 CONVERTER BOARD', 'S-7 / YV3.5 CONVERTER BOARD', 'S-8 / YV3.5 CONVERTER BOARD'],
		isShow: false,
		msg: '',
	}
	newLintSelect1 = {
		name: 'newLintSelect1',
		title: "S-7 / YV3.5 CONVERTER BOARD",
		lists: ['S-6 / YV3.5 CONVERTER BOARD', 'S-7 / YV3.5 CONVERTER BOARD', 'S-8 / YV3.5 CONVERTER BOARD'],
		isShow: false,
		msg: '',
	}
	newLintSelect2 = {
		name: 'newLintSelect2',
		title: "S-8 / YV3.5 CONVERTER BOARD",
		lists: ['S-6 / YV3.5 CONVERTER BOARD', 'S-7 / YV3.5 CONVERTER BOARD', 'S-8 / YV3.5 CONVERTER BOARD'],
		isShow: false,
		msg: '',
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

	selShow(s: string) {
		if (s == 'machineSelect') {
			this.machineSelect.isShow = !this.machineSelect.isShow;
			this.newLintSelect.isShow = false;
			this.newLintSelect1.isShow = false;
			this.newLintSelect2.isShow = false;
		} else if (s == 'newLintSelect') {
			this.newLintSelect.isShow = !this.newLintSelect.isShow;
			this.machineSelect.isShow = false;
			this.newLintSelect1.isShow = false;
			this.newLintSelect2.isShow = false;
		} else if (s == 'newLintSelect1') {
			this.newLintSelect1.isShow = !this.newLintSelect1.isShow;
			this.machineSelect.isShow = false;
			this.newLintSelect.isShow = false;
			this.newLintSelect2.isShow = false;
		} else if (s == 'newLintSelect2') {
			this.newLintSelect2.isShow = !this.newLintSelect2.isShow;
			this.machineSelect.isShow = false;
			this.newLintSelect.isShow = false;
			this.newLintSelect1.isShow = false;
		}
	}
	selHandler(s: any) {
		if (s.name == 'machineSelect') {
			this.machineSelect.title = s.title;
			this.machineSelect.isShow = false;
		} else if (s.name == 'newLintSelect') {
			this.newLintSelect.title = s.title;
			this.newLintSelect.isShow = false;
		} else if (s.name == 'newLintSelect1') {
			this.newLintSelect1.title = s.title;
			this.newLintSelect1.isShow = false;
		} else if (s.name == 'newLintSelect2') {
			this.newLintSelect2.title = s.title;
			this.newLintSelect2.isShow = false;
		}
	}

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
	}
	alertCheck(event: String) {
		this.alert_close('msg')
	}
}
