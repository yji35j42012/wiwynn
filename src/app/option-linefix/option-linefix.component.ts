import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelSelectComponent } from '../model-select/model-select.component';
import { AlertDelmsgComponent } from '../alert-delmsg/alert-delmsg.component';

@Component({
	selector: 'app-option-linefix',
	standalone: true,
	imports: [CommonModule, ModelSelectComponent, AlertDelmsgComponent],
	templateUrl: './option-linefix.component.html',
	styleUrl: './option-linefix.component.scss',
})
export class OptionLinefixComponent {
	constructor(private el: ElementRef) { }

	inbox2 = false
	stage_data = {
		box1: [
			{ id: 1, name: 'NPM-NS-0001' },
			{ id: 2, name: 'NPM-NS-0002' },
			{ id: 3, name: 'NPM-NS-0003' },
			{ id: 4, name: 'NPM-NS-0004' },
			{ id: 5, name: 'NPM-NS-0005' },
			{ id: 6, name: 'NPM-NS-0006' },
		],
		box2: [
			{ id: 7, name: 'NPM-NS-0007' },
		]
	}
	dragStart(e: any, i: number) {
		let item = this.el.nativeElement.querySelector("#drag_source_multiple" + i);
		e.dataTransfer.setData('text/plain', e.target.id);
		item.classList.add('dragging');
	}
	dragEnd(e: any, i: number) {
		let item = this.el.nativeElement.querySelector("#drag_source_multiple" + i);
		let drag_box1 = this.el.nativeElement.querySelector('#drag_box1');
		let drag_box2 = this.el.nativeElement.querySelector('#drag_box2');
		item.classList.remove('dragging');

		if (this.inbox2) {
			drag_box2.appendChild(item);

		} else {
			drag_box1.appendChild(item);
		}
	}

	droped(e: any) {
		let drag_box1 = this.el.nativeElement.querySelector('#drag_box1');
		this.cancelDefault(e);
		drag_box1.classList.remove('hover');
	}

	dragover(e: any) {
		this.inbox2 = false
		let drag_box1 = this.el.nativeElement.querySelector('#drag_box1');
		this.cancelDefault(e);
		drag_box1.classList.add('hover');
	}
	dragLeave(e: any) {
		let dropTargets_multiple = this.el.nativeElement.querySelector('[data-role="drag_drop_container"]');
		dropTargets_multiple.classList.remove('hover');
	}

	cancelDefault(e: Event) {
		e.preventDefault();
		e.stopPropagation();
		return false;
	}
	droped2(e: any) {
		let drag_box2 = this.el.nativeElement.querySelector('#drag_box2');
		this.cancelDefault(e);
		drag_box2.classList.remove('hover');
	}
	dragover2(e: any) {
		let drag_box2 = this.el.nativeElement.querySelector('#drag_box2');
		this.inbox2 = true
		this.cancelDefault(e);
		drag_box2.classList.add('hover');
	}
	dragLeave2(e: any) {
		let drag_box2 = this.el.nativeElement.querySelector('#drag_box2');
		drag_box2.classList.remove('hover');
	}
	cancelDefault2(e: Event) {
		e.preventDefault();
		e.stopPropagation();
		return false;
	}
	filte_line = {
		isShow: false,
	};
	filterLine() {
		this.filte_line.isShow = !this.filte_line.isShow;
	}
	filte_updater = {
		isShow: false,
	};
	filterUpdater() {
		this.filte_updater.isShow = !this.filte_updater.isShow;
	}

	lineinfo_sel = {
		name: 'lineinfo_sel',
		title: 'DIP',
		lists: ['DIP', 'DIP1'],
		isShow: false,
		msg: '線別資訊',
	};
	selShow(s: string) {
		if (s == 'lineinfo_sel') {
			this.lineinfo_sel.isShow = !this.lineinfo_sel.isShow;
		}
	}
	selHandler(s: any) {
		if (s.name == 'lineinfo_sel') {
			this.lineinfo_sel.title = s.title;
			this.lineinfo_sel.isShow = false;
		}
	}
	edit_alert = {
		state: '',
		isShow: false,
	};
	alertMsg = {
		show: false,
		title: '',
		msg: '',
		str: '',
	};
	editAlert(s: string) {
		this.edit_alert.state = s;
		this.edit_alert.isShow = true;
	}
	alert_close(s: string) {
		switch (s) {
			case 'editAlert':
				this.edit_alert.isShow = false;
				break;
			case 'delmsg':
				this.alertMsg.show = false;
				break;
		}
	}

	delHandler() {
		this.alertMsg.show = true;
		this.alertMsg.title = '刪除線別';
		this.alertMsg.msg = '您確定要刪除此線別？';
		this.alertMsg.str = 'delmsg';
	}
	alert_del(s: Event) {
		//  確認要刪除的動作
	}
}
