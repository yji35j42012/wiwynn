import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelSelectComponent } from '../model-select/model-select.component';
import { AlertDelmsgComponent } from '../alert-delmsg/alert-delmsg.component';
import { ModelSelcheckComponent } from '../model-selcheck/model-selcheck.component';

@Component({
	selector: 'app-option-working',
	standalone: true,
	imports: [CommonModule, ModelSelectComponent, AlertDelmsgComponent, ModelSelcheckComponent],
	templateUrl: './option-working.component.html',
	styleUrl: './option-working.component.scss',
})
export class OptionWorkingComponent {
	isShow = false;
	queryHandler() {
		this.isShow = true;
	}
	line_sel = {
		name: 'line_sel',
		title: 's1',
		lists: ['s1', 's2'],
		isShow: false,
		msg: 'Line',
	};
	lineclone_sel = {
		name: 'lineclone_sel',
		showLists: [] as { id: number; isChecked: boolean; name: string }[],
		lists: [
			{ id: 0, isChecked: true, name: 's1' },
			{ id: 1, isChecked: false, name: 's2' },
			{ id: 2, isChecked: false, name: 's3' },
			{ id: 3, isChecked: false, name: 's4' },
			{ id: 4, isChecked: false, name: 's5' },
			{ id: 5, isChecked: false, name: 's6' },
			{ id: 6, isChecked: false, name: 's7' },
		],
		isShow: false,
		msg: 'Line',
	};
	type_sel = {
		name: 'type_sel',
		title: 'DIP',
		lists: ['DIP', 'DIP1'],
		isShow: false,
		msg: 'Type',
	};
	typeclone_sel = {
		name: 'typeclone_sel',
		title: 'DIP',
		lists: ['DIP', 'DIP1'],
		isShow: false,
		msg: 'Type',
	};
	selShow(s: string) {
		if (s == 'line_sel') {
			this.line_sel.isShow = !this.line_sel.isShow;
			this.type_sel.isShow = false;
			this.lineclone_sel.isShow = false;
			this.typeclone_sel.isShow = false;
		} else if (s == 'type_sel') {
			this.type_sel.isShow = !this.type_sel.isShow;
			this.line_sel.isShow = false;
			this.lineclone_sel.isShow = false;
			this.typeclone_sel.isShow = false;
		} else if (s == 'typeclone_sel') {
			this.typeclone_sel.isShow = !this.typeclone_sel.isShow;
			this.line_sel.isShow = false;
			this.type_sel.isShow = false;
			this.lineclone_sel.isShow = false;
		}
	}
	selHandler(s: any) {
		if (s.name == 'line_sel') {
			this.line_sel.title = s.title;
			this.line_sel.isShow = false;
		} else if (s.name == 'type_sel') {
			this.type_sel.title = s.title;
			this.type_sel.isShow = false;
		}  else if (s.name == 'typeclone_sel') {
			this.typeclone_sel.title = s.title;
			this.typeclone_sel.isShow = false;
		}
	}

	selCheckShow(s: any) {
		if (s == 'lineclone_sel') {
			this.lineclone_sel.isShow = !this.lineclone_sel.isShow;
		}
	}
	selCheckHandler(obj: any) {
		if (this.lineclone_sel.lists[obj.id].isChecked) {
			this.lineclone_sel.lists[obj.id].isChecked = false;
			const rObj = this.lineclone_sel.showLists.findIndex(
				(item) => item.id === obj.id
			);
			this.lineclone_sel.showLists.splice(rObj, 1);
		} else {
			this.lineclone_sel.lists[obj.id].isChecked = true;
			this.lineclone_sel.showLists.push(this.lineclone_sel.lists[obj.id]);
		}
	}

	stage = {
		isShow: false,
	};
	stageHandler() {
		this.stage.isShow = true;
	}
	editStage = {
		isShow: false,
	};
	alertMsg = {
		show: false,
		title: '刪除 Stage',
		msg: '您確定要刪除此Stage？',
		str: 'delmsg',
	};
	alert_del(e: Event) {
		// 確認刪除事件
	}
	delHandler() {
		this.alertMsg.show = true;
	}

	editAlert() {
		this.editStage.isShow = true;
	}
	alert_close(s: string) {
		switch (s) {
			case 'stage':
				this.stage.isShow = false;
				break;
			case 'delmsg':
				this.alertMsg.show = false;
				break;
			case 'editStage':
				this.editStage.isShow = false;
				break;
			case 'clone':
				this.clone_box.isShow = false;
				break;
			case 'cloneAlert':
				this.clone_alert.isShow = false;
				break;
		}
	}
	clone_box = {
		isShow: false,
	};
	cloneHandler() {
		this.clone_box.isShow = true;
	}
	clone_alert = {
		isShow: false,
		lists: [
			{
				id: 0,
				title: 'TA',
				isChecked: true,
				isShow: true,
			},
			{
				id: 1,
				title: 'TB',
				isChecked: false,
				isShow: false,
			},
			{
				id: 2,
				title: 'TC',
				isChecked: true,
				isShow: false,
			},
		],
	};
	submitClone() {
		this.clone_alert.isShow = true;
	}
	cloneItem(n: number) {
		for (let i = 0; i < this.clone_alert.lists.length; i++) {
			this.clone_alert.lists[i].isShow = false;
		}
		this.clone_alert.lists[n].isShow = true;
	}
}
