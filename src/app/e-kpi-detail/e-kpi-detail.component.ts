import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelCalendarComponent } from '../model-calendar/model-calendar.component';
import { ModelSelcheckComponent } from '../model-selcheck/model-selcheck.component';

@Component({
	selector: 'app-e-kpi-detail',
	standalone: true,
	imports: [CommonModule, ModelCalendarComponent, ModelSelcheckComponent],
	templateUrl: './e-kpi-detail.component.html',
	styleUrl: './e-kpi-detail.component.scss'
})
export class EKpiDetailComponent {

	isTime = true
	changeMode(s: string) {
		console.log('aaa');
		
		s == 't' ? this.isTime=true : this.isTime=false
	}
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
	dateHanler(s: string) {
		var item: any;
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
	calerdarReturnHandler(obj: any) {
		console.log('calerdarReturnHandler', obj.year);
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
	selCheckShow(s: any) {
		if (s == 'line_sel') {
			this.line_sel.isShow = !this.line_sel.isShow;
			this.stage_sel.isShow = false;
		} else if (s == 'stage_sel') {
			this.stage_sel.isShow = !this.stage_sel.isShow;
			this.line_sel.isShow = false;
		}
	}
	selCheckHandler(obj: any) {
		var w: any
		var rObj: any
		if (obj.name == 'line_sel') {
			w = this.line_sel
			rObj = this.line_sel.showLists.findIndex(
				(item) => item.id === obj.id
			);
		} else if (obj.name == 'stage_sel') {
			w = this.stage_sel
			rObj = this.stage_sel.showLists.findIndex(
				(item) => item.id === obj.id
			);
		}

		if (w.lists[obj.id].isChecked) {
			w.lists[obj.id].isChecked = false;

			w.showLists.splice(rObj, 1);
		} else {
			w.lists[obj.id].isChecked = true;
			w.showLists.push(w.lists[obj.id]);
		}
	}

	ngOnInit(): void {
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
}
