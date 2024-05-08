import { Component, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarroomLineComponent } from '../warroom-line/warroom-line.component';
import { WarroomMachineComponent } from '../warroom-machine/warroom-machine.component';
import { AlertMsgComponent } from '../alert-msg/alert-msg.component';
import { ModelSelectComponent } from '../model-select/model-select.component';

@Component({
	selector: 'app-warroom-normal',
	standalone: true,
	imports: [
		CommonModule,
		AlertMsgComponent,
		ModelSelectComponent,
		WarroomLineComponent,
		WarroomMachineComponent,
	],
	templateUrl: './warroom-normal.component.html',
	styleUrl: './warroom-normal.component.scss',
})
export class WarroomNormalComponent {
	constructor(private el: ElementRef) { }

	// 103.03.29調整
	machine_data = [
		{
			isLong: false,
			title1: 's11',
			title2: 'YV3.5 MP FIO BO1ARD',
			inp: 200,
			out: 201,
			mo: '000010091072',
			oee: 65,
			product: 100,
			payment: 33653338,
			glyph: 12345556,
			water: 12345556,
			lists: [
				{ txt: 'EQ_WAIT', state: 'WAIT', name: 'Print1' },
				{ txt: 'PM', state: 'PM', name: 'Print2' },
				{ txt: 'PD_RUN', state: 'PD_RUN', name: 'Print3' },
				{ txt: 'ENG', state: 'ENG', name: 'Print4' },
				{ txt: 'OFF', state: 'OFF', name: 'Print5' },
				{ txt: 'PR_RUN', state: 'PR_RUN', name: 'Print6' },
			],
		},
		{
			isLong: true,
			title: 's22',
			state: 'WAIT',
			stateNum: 99,
			lists: [
				{ txt: 'EQ_WAIT', state: 'WAIT', name: 's311' },
				{ txt: 'PM', state: 'PM', name: 's312' },
			],
		},
		{
			isLong: false,
			title1: 's33',
			title2: 'YV3.5 MP FIO BO1ARD',
			inp: 200,
			out: 201,
			mo: '000010091072',
			oee: 65,
			product: 100,
			payment: 33653338,
			glyph: 12345556,
			water: 12345556,
			lists: [
				{ txt: 'EQ_WAIT', state: 'WAIT', name: 'sss1' },
				{ txt: 'PM', state: 'PM', name: 'sss2' },
				{ txt: 'PD_RUN', state: 'PD_RUN', name: 'sss3' },
				{ txt: 'ENG', state: 'ENG', name: 'sss4' },
				{ txt: 'OFF', state: 'OFF', name: 'sss5' },
				{ txt: 'PR_RUN', state: 'PR_RUN', name: 'sss6' },
				{ txt: 'EQ_WAIT', state: 'WAIT', name: 'sss7' },
				{ txt: 'PM', state: 'PM', name: 'sss8' },
				{ txt: 'PD_RUN', state: 'PD_RUN', name: 'sss9' },
				{ txt: 'ENG', state: 'ENG', name: 'sss10' },
				{ txt: 'OFF', state: 'OFF', name: 'sss11' },
				{ txt: 'PR_RUN', state: 'PR_RUN', name: 'sss12' },
				{ txt: 'EQ_WAIT', state: 'WAIT', name: 'sss13' },
			],
		},
		{
			isLong: false,
			title1: 's44',
			title2: 'YV3.5 MP FIO BO1ARD',
			inp: 200,
			out: 201,
			mo: '000010091072',
			oee: 65,
			product: 100,
			payment: 33653338,
			glyph: 12345556,
			water: 12345556,
			lists: [
				{ txt: 'EQ_WAIT', state: 'WAIT', name: 'sss1' },
				{ txt: 'PM', state: 'PM', name: 'sss2' },
				{ txt: 'PD_RUN', state: 'PD_RUN', name: 'sss3' },
				{ txt: 'ENG', state: 'ENG', name: 'sss4' },
				{ txt: 'OFF', state: 'OFF', name: 'sss5' },
				{ txt: 'PR_RUN', state: 'PR_RUN', name: 'sss6' },
				{ txt: 'EQ_WAIT', state: 'WAIT', name: 'sss7' },
				{ txt: 'PM', state: 'PM', name: 'sss8' },
				{ txt: 'PD_RUN', state: 'PD_RUN', name: 'sss9' },
				{ txt: 'ENG', state: 'ENG', name: 'sss10' },
				{ txt: 'OFF', state: 'OFF', name: 'sss11' },
				{ txt: 'PR_RUN', state: 'PR_RUN', name: 'sss12' },
				{ txt: 'EQ_WAIT', state: 'WAIT', name: 'sss13' },
			],
		},
	];
	line_move = {
		move_num: -1,
		moveStartY: 0,
	};

	line_startId = -1;
	line_overId = -1;
	line_temb: any = null;
	dragstart(num: number) {
		if (!this.isEdit) return;
		this.line_startId = num;
	}
	dragEnd(num: number) {
		if (!this.isEdit) return;
		if (this.line_startId !== this.line_overId) {
			this.line_temb = this.machine_data[this.line_startId];
			this.machine_data[this.line_startId] =
				this.machine_data[this.line_overId];
			this.machine_data[this.line_overId] = this.line_temb;
		}
	}
	dragover(e: Event, num: number) {
		if (!this.isEdit) return;
		this.line_overId = num;
		e.preventDefault();
		e.stopPropagation();
		return false;
	}

	lineList_startId = -1;
	lineList_overId = -1;
	lineList_temb: any = null;

	Mdragstart(e: Event, i: number, num: number) {
		if (!this.isEdit) return;
		this.line_startId = i;
		this.line_overId = i;
		this.lineList_startId = num;
	}
	MdragEnd(i: number, num: number) {
		if (!this.isEdit) return;
		if (this.lineList_startId !== this.lineList_overId) {
			this.lineList_temb = this.machine_data[i].lists[this.lineList_startId];
			this.machine_data[i].lists[this.lineList_startId] =
				this.machine_data[i].lists[this.lineList_overId];
			this.machine_data[i].lists[this.lineList_overId] = this.lineList_temb;
		}
	}
	Mdragover(e: Event, num: number) {
		if (!this.isEdit) return;
		this.lineList_overId = num;
		e.preventDefault();
		e.stopPropagation();
		return false;
	}

	// 103.03.29調整

	machineSelect = {
		name: 'machineSelect',
		title: '變更機台顯示名稱',
		lists: ['機台顯示名稱1', '機台顯示名稱2'],
		isShow: false,
		msg: '',
	};
	newLintSelect = {
		name: 'newLintSelect',
		title: 'S-6 / YV3.5 CONVERTER BOARD',
		lists: [
			'S-6 / YV3.5 CONVERTER BOARD',
			'S-7 / YV3.5 CONVERTER BOARD',
			'S-8 / YV3.5 CONVERTER BOARD',
		],
		isShow: false,
		msg: '',
	};
	newLintSelect1 = {
		name: 'newLintSelect1',
		title: 'S-7 / YV3.5 CONVERTER BOARD',
		lists: [
			'S-6 / YV3.5 CONVERTER BOARD',
			'S-7 / YV3.5 CONVERTER BOARD',
			'S-8 / YV3.5 CONVERTER BOARD',
		],
		isShow: false,
		msg: '',
	};
	newLintSelect2 = {
		name: 'newLintSelect2',
		title: 'S-8 / YV3.5 CONVERTER BOARD',
		lists: [
			'S-6 / YV3.5 CONVERTER BOARD',
			'S-7 / YV3.5 CONVERTER BOARD',
			'S-8 / YV3.5 CONVERTER BOARD',
		],
		isShow: false,
		msg: '',
	};
	selectTitle = '變更機台顯示名稱';
	isEdit = false; //切換成編輯模式
	newMachine = false;
	newLine = false;
	alertMsg = {
		show: false,
		title: '',
		msg: '',
		str: '',
	};
	machineDetail = false;
	showLine = false;
	machineEvent = {
		show: false,
		class: false,
	};
	lineEvent = {
		show: false,
		class: false,
		num: -1,
	};

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
		this.isEdit = true;
	}
	cancleHandler() {
		this.isEdit = false;
	}
	addMachine(event: Event) {
		event.stopPropagation();
		this.newMachine = true;
	}
	addLine() {
		this.newLine = true;
	}
	saveLine() {
		this.newLine = false;
		this.alertMsg.show = true;
		this.alertMsg.title = '儲存生產線編輯';
		this.alertMsg.msg = '您確定要儲存變更？';
		this.alertMsg.str = 'line';
	}
	machine(event: Event) {
		event.stopPropagation();
		if (this.isEdit) {
			return;
		}
		this.machineEvent.show = true;
		setTimeout(() => {
			this.machineEvent.class = true;
		}, 10);
	}
	line(num: number) {
		if (this.isEdit) {
			return;
		}
		this.lineEvent.num = num;
		let itemBox = this.el.nativeElement.querySelector('.warroom_content');
		let item = this.el.nativeElement.querySelectorAll('.warroom_machine')[num];
		var move: string;
		if (window.innerWidth < 1441) {
			itemBox.style = `overflow: unset;`;
			move =
				(itemBox.offsetTop + 236 * num - itemBox.scrollTop + 206) * -1 + 'px';
		} else {
			move = (itemBox.offsetTop + 236 * num - itemBox.scrollTop) * -1 + 'px';
		}
		// 206
		item.style = `--moveY:${move}`;
		this.alert_close('machine');
		this.lineEvent.show = true;
		setTimeout(() => {
			this.lineEvent.class = true;
		}, 10);
	}
	alert_close(value: string) {
		switch (value) {
			case 'newMachine':
				this.newMachine = false;
				break;
			case 'newLine':
				this.newLine = false;
				break;
			case 'msg':
				this.alertMsg.show = false;
				break;
			case 'machine':
				this.machineEvent.class = false;
				setTimeout(() => {
					this.machineEvent.show = false;
				}, 500);
				break;
			case 'line':
				this.lineEvent.class = false;
				let item =
					this.el.nativeElement.querySelectorAll('.warroom_machine')[
					this.lineEvent.num
					];
				item.style.transform = `translateY(0px)`;
				if (window.innerWidth < 1441) {
					this.el.nativeElement.querySelector(
						'.warroom_content'
					).style = `overflow: ;`;
				}
				setTimeout(() => {
					this.lineEvent.show = false;
				}, 500);
				break;
			default:
				break;
		}
	}
	getEvent(event: String) { }
	alertCheck(event: String) {
		this.alert_close('msg');
	}

	isHostListener: Boolean = false;
	mouseevent(b: Boolean) {
		this.isHostListener = b;
	}

	@HostListener('document:click', ['$event'])
	onClick(event: MouseEvent) {
		if (this.isHostListener) return;
		if (this.machineSelect.isShow) {
			this.machineSelect.isShow = false;
		}
		if (this.newLintSelect.isShow) {
			this.newLintSelect.isShow = false;
		}
		if (this.newLintSelect1.isShow) {
			this.newLintSelect1.isShow = false;
		}
		if (this.newLintSelect2.isShow) {
			this.newLintSelect2.isShow = false;
		}
	}
}
