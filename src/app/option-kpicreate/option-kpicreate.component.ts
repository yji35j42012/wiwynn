import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelSelectComponent } from '../model-select/model-select.component';
import { AlertDelmsgComponent } from '../alert-delmsg/alert-delmsg.component';
import { ModelSelcheckComponent } from '../model-selcheck/model-selcheck.component';

@Component({
	selector: 'app-option-kpicreate',
	standalone: true,
	imports: [CommonModule, ModelSelcheckComponent, ModelSelectComponent, AlertDelmsgComponent],
	templateUrl: './option-kpicreate.component.html',
	styleUrl: './option-kpicreate.component.scss'
})
export class OptionKpicreateComponent {
	@HostListener('document:click', ['$event'])
	onClick(event: MouseEvent) {
		if (this.kpicreate.detailTxt !== '') {
			this.kpicreate.detailTxt = ''
		}
	}
	kpicreate = {
		data: [] as { term: string, date: string, number: number, range: string, rotate: string, target: number, isRed: boolean, detail: string }[],
		detailTxt: '',
		detailboxX: 0,
		detailboxY: 0,
	}
	calcNum(num: number) {
		if (num >= 0 && num <= 25) {
			return "_quarter1";
		} else if (num > 25 && num <= 50) {
			return "_quarter2";
		} else if (num > 50 && num <= 75) {
			return "_quarter3";
		} else if (num > 75 && num <= 100) {
			return "_quarter4";
		} else {
			return ""; // 或者你可以选择返回一个错误提示或其他值
		}
	}
	calcRotate(num: number) {
		return num * 3.6 + "deg"
	}

	ngOnInit(): void {
		this.kpicreate.data.push(
			{
				term: 'PCBA FPYR DIP',
				date: '2023/12月',
				number: 99,
				range: this.calcNum(99),
				rotate: this.calcRotate(99),
				target: 99,
				isRed: false,
				detail: 'PCBA FPYR-11 測試站點 測試站PCBA FPYR-11 測試站點 測試站PCBA FPYR-11 測試站點 測試站PCBA FPYR-11 測試站點 測試站'
			},
			{
				term: 'PCBA UPPH DIP',
				date: '2023/11月',
				number: 70,
				range: this.calcNum(70),
				rotate: this.calcRotate(70),
				target: 99,
				isRed: true,
				detail: 'PCBA UPPH-11 測試站點 測試站PCBA UPPH-11 測試站點 測試站PCBA UPPH-11 測試站點 測試站PCBA UPPH-11 測試站點 測試站'
			},

			{
				term: 'PCBA FPYR DIP',
				date: '2023/10月',
				number: 45,
				range: this.calcNum(45),
				rotate: this.calcRotate(45),
				target: 99,
				isRed: false,
				detail: 'PCBA FPYR-11 測試站點 測試站PCBA FPYR-11 測試站點 測試站PCBA FPYR-11 測試站點 測試站PCBA FPYR-11 測試站點 測試站'
			},
			{
				term: 'PCBA UPPH DIP',
				date: '2023/9月',
				number: 20,
				range: this.calcNum(20),
				rotate: this.calcRotate(20),
				target: 99,
				isRed: true,
				detail: 'PCBA UPPH-11 測試站點 測試站PCBA UPPH-11 測試站點 測試站PCBA UPPH-11 測試站點 測試站PCBA UPPH-11 測試站點 測試站'
			}
		)

		this.line_sel.lists.forEach((item) => {
			if (item.isChecked) {
				this.line_sel.showLists.push(item);
			}
		});
		this.stage_sel.lists.forEach((item) => {
			if (item.isChecked) {
				this.stage_sel.showLists.push(item);
			}
		});
	}

	moreHandler(event: MouseEvent, i: number) {
		event.stopPropagation();
		const button = event.target as HTMLButtonElement;
		const rect = button.getBoundingClientRect();
		const x = rect.left;
		const y = rect.top;
		this.kpicreate.detailboxX = x
		this.kpicreate.detailboxY = y
		this.kpicreate.detailTxt = this.kpicreate.data[i].detail
	}



	kpi_sel = {
		name: 'kpi_sel',
		title: 'DIP',
		lists: ['DIP', 'DIP1'],
		isShow: false,
		msg: 'KPI',
	};
	line_sel = {
		name: 'line_sel',
		showLists: [] as { id: number; isChecked: boolean; name: string }[],
		lists: [
			{ id: 0, isChecked: true, name: 'PCB-IM' },
			{ id: 1, isChecked: false, name: 'PCB-IL' },
			{ id: 2, isChecked: false, name: 'PCB-IN' },
			{ id: 3, isChecked: false, name: 'PCB-IO' },
			{ id: 4, isChecked: false, name: 'PCB-IP' },
			{ id: 5, isChecked: false, name: 'PCB-IV' },
			{ id: 6, isChecked: false, name: 'PCB-IB' },
		],
		isShow: false,
		msg: 'line',
	};
	stage_sel = {
		name: 'stage_sel',
		showLists: [] as { id: number; isChecked: boolean; name: string }[],
		lists: [
			{ id: 0, isChecked: true, name: 'PCB-IM' },
			{ id: 1, isChecked: false, name: 'PCB-IL' },
			{ id: 2, isChecked: false, name: 'PCB-IN' },
			{ id: 3, isChecked: false, name: 'PCB-IO' },
			{ id: 4, isChecked: false, name: 'PCB-IP' },
			{ id: 5, isChecked: false, name: 'PCB-IV' },
			{ id: 6, isChecked: false, name: 'PCB-IB' },
		],
		isShow: false,
		msg: 'stage',
	};
	category_sel = {
		name: 'category_sel',
		title: 'DIP',
		lists: ['SMT', 'DIP', 'FA'],
		isShow: false,
		msg: 'Category',
	};
	selShow(s: string) {
		if (s == 'kpi_sel') {
			this.kpi_sel.isShow = !this.kpi_sel.isShow;
			this.line_sel.isShow = false
			this.stage_sel.isShow = false
			this.category_sel.isShow = false
		} else if (s == 'line_sel') {
			this.line_sel.isShow = !this.line_sel.isShow;
			this.kpi_sel.isShow = false
			this.stage_sel.isShow = false
			this.category_sel.isShow = false
		} else if (s == 'stage_sel') {
			this.stage_sel.isShow = !this.stage_sel.isShow;
			this.line_sel.isShow = false
			this.kpi_sel.isShow = false
			this.category_sel.isShow = false
		} else if (s == 'category_sel') {
			this.category_sel.isShow = !this.category_sel.isShow;
			this.line_sel.isShow = false
			this.stage_sel.isShow = false
			this.kpi_sel.isShow = false
		}
	}
	selHandler(s: any) {
		if (s.name == 'kpi_sel') {
			this.kpi_sel.title = s.title;
			this.kpi_sel.isShow = false;
		} else if (s.name == 'category_sel') {
			this.category_sel.title = s.title;
			this.category_sel.isShow = false;
		}
	}
	selCheckShow(s: any) {
		if (s == 'line_sel') {
			this.line_sel.isShow = !this.line_sel.isShow;
			this.kpi_sel.isShow = false
			this.stage_sel.isShow = false
			this.category_sel.isShow = false
		} else if (s == 'stage_sel') {
			this.stage_sel.isShow = !this.stage_sel.isShow;
			this.kpi_sel.isShow = false
			this.line_sel.isShow = false
			this.category_sel.isShow = false
		}
	}
	selCheckHandler(obj: any) {
		var s: any
		if (obj.name == 'line_sel') {
			if (this.line_sel.lists[obj.id].isChecked) {
				this.line_sel.lists[obj.id].isChecked = false;
				const rObj = this.line_sel.showLists.findIndex(
					(item) => item.id === obj.id
				);
				this.line_sel.showLists.splice(rObj, 1);
			} else {
				this.line_sel.lists[obj.id].isChecked = true;
				this.line_sel.showLists.push(this.line_sel.lists[obj.id]);
			}
		} else if (obj.name == 'stage_sel') {
			if (this.stage_sel.lists[obj.id].isChecked) {
				this.stage_sel.lists[obj.id].isChecked = false;
				const rObj = this.stage_sel.showLists.findIndex(
					(item) => item.id === obj.id
				);
				this.stage_sel.showLists.splice(rObj, 1);
			} else {
				this.stage_sel.lists[obj.id].isChecked = true;
				this.stage_sel.showLists.push(this.stage_sel.lists[obj.id]);
			}
		}
	}
	edit_alert = {
		state: '',
		isShow: false,
	}
	alertMsg = {
		show: false,
		title: '刪除KPI指標',
		msg: '您確定要刪除此KPI指標？',
		str: 'delmsg',
	};
	editAlert(s: string) {
		this.edit_alert.state = s;
		this.edit_alert.isShow = true
	}
	alert_del(e: Event) {
		// 確認刪除事件
	}
	delHandler() {
		this.alertMsg.show = true;
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


}
