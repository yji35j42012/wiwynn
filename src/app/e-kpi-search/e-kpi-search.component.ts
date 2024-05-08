import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ModelCalendarComponent } from '../model-calendar/model-calendar.component';
import { ModelSelcheckComponent } from '../model-selcheck/model-selcheck.component';
import { EKpiDetailComponent } from '../e-kpi-detail/e-kpi-detail.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule
@Component({
	selector: 'app-e-kpi-search',
	standalone: true,
	imports: [
		CommonModule,
		ModelCalendarComponent,
		ModelSelcheckComponent,
		EKpiDetailComponent,
		FormsModule,
	],
	templateUrl: './e-kpi-search.component.html',
	styleUrl: './e-kpi-search.component.scss',
})
export class EKpiSearchComponent {
	constructor(private router: Router) { }
	kpi_filter = {
		start: {
			isShow: false,
			year: 2024,
			month: 2,
			day: 11,
			hour: 10,
			min: 11,
		},
		end: {
			isShow: false,
			year: 2024,
			month: 3,
			day: 11,
			hour: 10,
			min: 11,
		},
	};
	calendar = {
		state: '',
		isShow: false,
		year: 2024,
		month: 2,
		day: 11,
		hour: 10,
		min: 11,
	};

	dateHanler (s: string) {
		var item: any;
		this.line_sel.isShow = false;
		this.stage_sel.isShow = false;
		this.filter_lv1.isShow = false;
		if (s == 'start') {
			this.kpi_filter.end.isShow = false;
			this.kpi_filter.start.isShow = !this.kpi_filter.start.isShow;
			item = this.kpi_filter.start;
		} else if (s == 'end') {
			this.kpi_filter.start.isShow = false;
			this.kpi_filter.end.isShow = !this.kpi_filter.end.isShow;
			item = this.kpi_filter.end;
		}
		this.calendar.state = s;
		this.calendar.year = item.year;
		this.calendar.month = item.month;
		this.calendar.day = item.day;
		this.calendar.hour = item.hour;
		this.calendar.min = item.min;
	}
	calerdarReturnHandler (obj: any) {
		var item: any;
		if (this.calendar.state == 'start') {
			item = this.kpi_filter.start;
		} else if (this.calendar.state == 'end') {
			item = this.kpi_filter.end;
		}
		item.isShow = false;
		item.month = obj.month;
		item.day = obj.day;
		item.hour = obj.hour;
		item.min = obj.min;
	}
	filter_lv1 = {
		name: 'lv1_sel',
		showLists: [] as { id: number; isChecked: boolean; name: string }[],
		lists: [
			{ id: 0, isChecked: false, name: 'PCB-IM' },
			{ id: 1, isChecked: false, name: 'PCB-IL' },
			{ id: 2, isChecked: false, name: 'PCB-IN' },
			{ id: 3, isChecked: false, name: 'PCB-IO' },
			{ id: 4, isChecked: false, name: 'PCB-IP' },
			{ id: 5, isChecked: false, name: 'PCB-IV' },
			{ id: 6, isChecked: false, name: 'PCB-IB' },
		],
		isShow: false,
		msg: '',

		filterLists: [
			{ id: 0, isChecked: false, name: 'Select All' },
			{ id: 1, isChecked: false, name: 'SMT' },
			{ id: 2, isChecked: false, name: 'DIP' },
			{ id: 3, isChecked: false, name: 'FA' },
		],
	};
	filterLv1 () {
		this.filter_lv1.isShow = !this.filter_lv1.isShow;
		this.line_sel.isShow = false;
		this.line_sel.isShow = false;
		this.kpi_filter.end.isShow = false;
		this.kpi_filter.start.isShow = false;
		this.stage_sel.isShow = false;
	}
	kpi = {
		data_lv1: [] as {
			term: string;
			target: number;
			isRed: boolean;
			number: number;
			range: string;
			rotate: string;
			isNodata: boolean;
			isFav: boolean;
			detail: string;
			isOn: boolean;
		}[],
		detailboxX: 0,
		detailboxY: 0,
		detailTxt: '',
		detailTxt2: {},
		data_lv2: [] as {
			term: string;
			state: string;
			target: number;
			isRed: boolean;
			number: number;
			range: string;
			rotate: string;
			isNodata: boolean;
			// isFav: boolean;
			detail: {};
			isOn: boolean;
		}[],
		data_lv3: [] as {
			term: string;
			target: number;
			isRed: boolean;
			number: number;
			range: string;
			rotate: string;
			isNodata: boolean;
			// isFav: boolean;
			detail: {};
			isOn: boolean;
		}[],
	};
	calcNum (num: number) {
		if (num >= 0 && num <= 25) {
			return '_quarter1';
		} else if (num > 25 && num <= 50) {
			return '_quarter2';
		} else if (num > 50 && num <= 75) {
			return '_quarter3';
		} else if (num > 75 && num <= 100) {
			return '_quarter4';
		} else {
			return ''; // 或者你可以选择返回一个错误提示或其他值
		}
	}
	calcRotate (num: number) {
		return num * 3.6 + 'deg';
	}
	ngOnInit (): void {
		this.kpi.data_lv1.push(
			{
				term: 'PCBA FPYR DIP',
				target: 98.5,
				isRed: false,
				number: 99,
				range: this.calcNum(99),
				rotate: this.calcRotate(99),
				isNodata: false,
				isFav: false,
				detail:
					'PCBA FPYR-11 測試站點 測試站PCBA FPYR-11 測試站點 測試站PCBA FPYR-11 測試站點 測試站PCBA FPYR-11 測試站點 測試站',
				isOn: false,
			},
			{
				term: 'PCBA FPYR13233r sDIPPCBAFPYRP PCBA FPYR13233r sDIPPCBAFPYRP',
				target: 98.5,
				isRed: true,
				number: 66,
				range: this.calcNum(66),
				rotate: this.calcRotate(66),
				isNodata: false,
				isFav: true,
				detail:
					'PCBA FPYR-11 測試站點 測試站PCBA FPYR-11 測試站點 測試站PCBA FPYR-11 測試站點 測試站PCBA FPYR-11 測試站點 測試站',
				isOn: false,
			},
			{
				term: 'DIP UPPH(D01-D06)',
				target: 10,
				isRed: false,
				number: 8,
				range: this.calcNum(8),
				rotate: this.calcRotate(8),
				isNodata: false,
				isFav: true,
				detail:
					'PCBA FPYR-11 測試站點 測試站PCBA FPYR-11 測試站點 測試站PCBA FPYR-11 測試站點 測試站PCBA FPYR-11 測試站點 測試站',
				isOn: false,
			},
			{
				term: 'DIP UPPH002',
				target: 10,
				isRed: true,
				number: 20,
				range: this.calcNum(20),
				rotate: this.calcRotate(20),
				isNodata: false,
				isFav: false,
				detail:
					'PCBA FPYR-11 測試站點 測試站PCBA FPYR-11 測試站點 測試站PCBA FPYR-11 測試站點 測試站PCBA FPYR-11 測試站點 測試站',
				isOn: false,
			},
			{
				term: 'PCBA UPPH DIP',
				target: 0,
				isRed: true,
				number: 0,
				range: this.calcNum(0),
				rotate: this.calcRotate(0),
				isNodata: true,
				isFav: false,
				detail:
					'PCBA FPYR-11 測試站點 測試站PCBA FPYR-11 測試站點 測試站PCBA FPYR-11 測試站點 測試站PCBA FPYR-11 測試站點 測試站',
				isOn: false,
			}
		);
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
	kpiLv1Handler (i: number) {
		for (let i = 0; i < this.kpi.data_lv1.length; i++) {
			const element = this.kpi.data_lv1[i];
			element.isOn = false;
		}
		this.kpi.data_lv1[i].isOn = true;
		this.kpi.data_lv2 = [];
		this.kpi.data_lv2.push(
			{
				term: 'E-TRON UBB',
				state: 'MP',
				isOn: false,
				target: 98.5,
				isRed: true,
				number: 66,
				range: this.calcNum(66),
				rotate: this.calcRotate(66),
				isNodata: false,
				detail: {
					term: 'PCBA FPYR-11 測試站點',
					model: 'Model:E-TRON UBB',
					line: 'D1,D2,D3,D4,D6,D7',
					stages: 'BD,CT,HB,IA,TA,TD',
				},
			},
			{
				term: 'TETON CPU1 RISER & 1233456TETON CPU1 RISER & 1233456',
				state: 'MP',
				isOn: false,
				target: 98.5,
				isRed: false,
				number: 100,
				range: this.calcNum(100),
				rotate: this.calcRotate(100),
				isNodata: false,
				detail: {
					term: 'PCBA FPYR-11 測試站點',
					model: 'Model:E-TRON UBB',
					line: 'D1,D2,D3,D4,D6,D7',
					stages: 'BD,CT,HB,IA,TA,TD',
				},
			},
			{
				term: 'E-TRON UBB',
				state: 'PR',
				isOn: false,
				target: 98.5,
				isRed: false,
				number: 99,
				range: this.calcNum(99),
				rotate: this.calcRotate(99),
				isNodata: false,
				detail: {
					term: 'PCBA FPYR-11 測試站點',
					model: 'Model:E-TRON UBB',
					line: 'D1,D2,D3,D4,D6,D7',
					stages: 'BD,CT,HB,IA,TA,TD',
				},
			}
		);
	}
	kpiLv2Handler (i: number) {
		for (let i = 0; i < this.kpi.data_lv2.length; i++) {
			const element = this.kpi.data_lv2[i];
			element.isOn = false;
		}
		this.kpi.data_lv2[i].isOn = true;

		this.kpi.data_lv3 = [];
		this.kpi.data_lv3.push(
			{
				term: 'KPI Third',
				isOn: false,
				target: 98.5,
				isRed: false,
				number: 99,
				range: this.calcNum(99),
				rotate: this.calcRotate(99),
				isNodata: false,
				detail: {
					term: 'PCBA FPYR-11 測試站點',
					model: 'Model:E-TRON UBB',
					line: 'D1,D2,D3,D4,D6,D7',
					stages: 'BD,CT,HB,IA,TA,TD',
				},
			},
			{
				term: 'KPI Third2',
				isOn: false,
				target: 98.5,
				isRed: false,
				number: 99,
				range: this.calcNum(99),
				rotate: this.calcRotate(99),
				isNodata: false,
				detail: {
					term: 'PCBA FPYR-11 測試站點',
					model: 'Model:E-TRON UBB',
					line: 'D1,D2,D3,D4,D6,D7',
					stages: 'BD,CT,HB,IA,TA,TD',
				},
			},
			{
				term: 'KPI Third3',
				isOn: false,
				target: 98.5,
				isRed: false,
				number: 99,
				range: this.calcNum(99),
				rotate: this.calcRotate(99),
				isNodata: false,
				detail: {
					term: 'PCBA FPYR-11 測試站點',
					model: 'Model:E-TRON UBB',
					line: 'D1,D2,D3,D4,D6,D7',
					stages: 'BD,CT,HB,IA,TA,TD',
				},
			}
		);
	}
	kpiLv3Handler (i: number) {
		for (let i = 0; i < this.kpi.data_lv3.length; i++) {
			const element = this.kpi.data_lv3[i];
			element.isOn = false;
		}
		this.kpi.data_lv3[i].isOn = true;
		this.router.navigate(['/home/E-KPI/detail/' + i]);
	}
	moreHandler (event: MouseEvent, i: number) {
		event.stopPropagation();
		const button = event.target as HTMLButtonElement;
		const rect = button.getBoundingClientRect();
		const x = rect.left;
		const y = rect.top;
		this.kpi.detailboxX = x;
		this.kpi.detailboxY = y;
		this.kpi.detailTxt = this.kpi.data_lv1[i].detail;
	}

	checkChange (s: string, i: number) {
		var item: any;
		if (s == 'lv1') {
			item = this.filter_lv1.filterLists;
		}
		if (i == 0) {
			if (item[0].isChecked) {
				for (let i = 0; i < item.length; i++) {
					const element = item[i];
					element.isChecked = true;
				}
			} else {
				for (let i = 0; i < item.length; i++) {
					const element = item[i];
					element.isChecked = false;
				}
			}
		} else if (i !== 0) {
			if (item[0].isChecked && !item[i].isChecked) {
				item[0].isChecked = item[i].isChecked;
			}
		}
	}

	line_sel = {
		name: 'line_sel',
		showLists: [] as { id: number; isChecked: boolean; name: string }[],
		lists: [
			{ id: 0, isChecked: true, name: 'D1' },
			{ id: 1, isChecked: false, name: 'D2' },
			{ id: 2, isChecked: false, name: 'D3' },
			{ id: 3, isChecked: false, name: 'D4' },
			{ id: 4, isChecked: false, name: 'D5' },
			{ id: 5, isChecked: false, name: 'D6' },
			{ id: 6, isChecked: false, name: 'D7' },
		],
		isShow: false,
		msg: '',
	};
	stage_sel = {
		name: 'stage_sel',
		showLists: [] as { id: number; isChecked: boolean; name: string }[],
		lists: [
			{ id: 0, isChecked: true, name: 'D1' },
			{ id: 1, isChecked: false, name: 'D2' },
			{ id: 2, isChecked: false, name: 'D3' },
			{ id: 3, isChecked: false, name: 'D4' },
			{ id: 4, isChecked: false, name: 'D5' },
			{ id: 5, isChecked: false, name: 'D6' },
			{ id: 6, isChecked: false, name: 'D7' },
		],
		isShow: false,
		msg: '',
	};
	selCheckShow (s: any) {
		this.filter_lv1.isShow = false;
		this.kpi_filter.end.isShow = false;
		this.kpi_filter.start.isShow = false;

		if (s == 'line_sel') {
			this.line_sel.isShow = !this.line_sel.isShow;
			this.stage_sel.isShow = false;
		} else if (s == 'stage_sel') {
			this.stage_sel.isShow = !this.stage_sel.isShow;
			this.line_sel.isShow = false;
		}
	}
	selCheckHandler (obj: any) {
		var w: any;
		var rObj: any;
		if (obj.name == 'line_sel') {
			w = this.line_sel;
			rObj = this.line_sel.showLists.findIndex((item) => item.id === obj.id);
		} else if (obj.name == 'stage_sel') {
			w = this.stage_sel;
			rObj = this.stage_sel.showLists.findIndex((item) => item.id === obj.id);
		}

		if (w.lists[obj.id].isChecked) {
			w.lists[obj.id].isChecked = false;

			w.showLists.splice(rObj, 1);
		} else {
			w.lists[obj.id].isChecked = true;
			w.showLists.push(w.lists[obj.id]);
		}
	}

	favoriteHandler (i: number) {
		this.router.navigate(['/home/E-KPI/favorite/' + i]);
	}

	isHostListener: Boolean = false;
	mouseevent (b: Boolean) {
		this.isHostListener = b;
	}
	@HostListener('document:click', ['$event'])
	onClick (event: MouseEvent) {
		this.kpi.detailTxt = '';
		if (this.isHostListener) return;
		if (this.filter_lv1.isShow) {
			this.filter_lv1.isShow = false;
		}
		if (this.kpi_filter.end.isShow) {
			this.kpi_filter.end.isShow = false;
		}
		if (this.kpi_filter.start.isShow) {
			this.kpi_filter.start.isShow = false;
		}
		if (this.line_sel.isShow) {
			this.line_sel.isShow = false;
		}
		if (this.stage_sel.isShow) {
			this.stage_sel.isShow = false;
		}
	}
}
