import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelSelectComponent } from '../model-select/model-select.component';
import { ModelCalendarComponent } from '../model-calendar/model-calendar.component';

@Component({
	selector: 'app-equipment-center',
	standalone: true,
	imports: [CommonModule, ModelSelectComponent, ModelCalendarComponent],
	templateUrl: './equipment-center.component.html',
	styleUrl: './equipment-center.component.scss'
})
export class EquipmentCenterComponent {
	line_sel = {
		name: 'line_sel',
		title: 's1',
		lists: ['s1', 's2', 's3', 's4', 's5'],
		isShow: false,
		msg: 'Line',
	};
	selShow(s: string) {
		if (s == 'line_sel') {
			this.line_sel.isShow = !this.line_sel.isShow;
		}
	}
	selHandler(s: any) {
		if (s.name == 'line_sel') {
			this.line_sel.title = s.title;
			this.line_sel.isShow = false;
		}
	}
	equipment_filter = {
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
			this.equipment_filter.end.isShow = false;
			this.equipment_filter.start.isShow = !this.equipment_filter.start.isShow;
			item = this.equipment_filter.start;
		} else if (s == 'end') {
			this.equipment_filter.start.isShow = false;
			this.equipment_filter.end.isShow = !this.equipment_filter.end.isShow;
			item = this.equipment_filter.end;
		}
		this.calendar.state = s;
		this.calendar.year = item.year;
		this.calendar.month = item.month;
		this.calendar.day = item.day;
		this.calendar.hour = item.hour;
		this.calendar.min = item.min;
	}
	calerdarReturnHandler(obj: any) {
		var item: any;
		if (this.calendar.state == 'start') {
			item = this.equipment_filter.start;
		} else if (this.calendar.state == 'end') {
			item = this.equipment_filter.end;
		}
		item.isShow = false;
		item.month = obj.month;
		item.day = obj.day;
		item.hour = obj.hour;
		item.min = obj.min;
	}
}
