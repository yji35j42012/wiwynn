import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelSelectComponent } from '../model-select/model-select.component';
import { ModelCalendarComponent } from '../model-calendar/model-calendar.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
	selector: 'app-equipment-center',
	standalone: true,
	imports: [
		CommonModule,
		ModelSelectComponent,
		ModelCalendarComponent,
		FormsModule,
	],
	templateUrl: './equipment-center.component.html',
	styleUrl: './equipment-center.component.scss',
})
export class EquipmentCenterComponent {
	line_sel = {
		name: 'line_sel',
		title: 's1',
		lists: ['s1', 's2', 's3', 's4', 's5'],
		isShow: false,
		msg: 'Line',
	};
	selShow (s: string) {
		this.equipment_filter.end.isShow = false;
		this.equipment_filter.start.isShow = false;
		if (s == 'line_sel') {
			this.line_sel.isShow = !this.line_sel.isShow;
		}
	}
	selHandler (s: any) {
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
	dateHanler (s: string) {
		this.line_sel.isShow = false;
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
	calerdarReturnHandler (obj: any) {
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

	equipment_data = [
		{
			line: 's1',
			machine: 'Printer-NS-0001(DEK-1)',
			isWarning: true,
			plan: [
				{
					value: 10,
					color: 'red',
					msg: 'EQ_WAIT',
				},
				{
					value: 20,
					color: 'green',
					msg: 'PD_RUN',
				},
				{
					value: 30,
					color: 'orange',
					msg: 'ENG',
				},
			],
			result: [
				{
					value: 20,
					color: 'green',
					msg: 'EQ_WAIT',
				},
				{
					value: 35,
					color: 'red',
					msg: 'PD_RUN',
				},
				{
					value: 45,
					color: 'orange',
					msg: 'ENG',
				},
			],
		},
		{
			line: 's2',
			machine: 'Printer-NS-0001(DEK-2)',
			isWarning: false,
			plan: [
				{
					value: 10,
					color: 'red',
					msg: 'EQ_WAIT',
				},
				{
					value: 20,
					color: 'green',
					msg: 'PD_RUN',
				},
				{
					value: 30,
					color: 'orange',
					msg: 'ENG',
				},
			],
			result: [
				{
					value: 10,
					color: 'red',
					msg: 'EQ_WAIT',
				},
				{
					value: 20,
					color: 'green',
					msg: 'PD_RUN',
				},
				{
					value: 30,
					color: 'orange',
					msg: 'ENG',
				},
			],
		},
		{
			line: 's2',
			machine: 'Printer-NS-0001(DEK-2)',
			isWarning: false,
			plan: [
				{
					value: 10,
					color: 'red',
					msg: 'EQ_WAIT',
				},
				{
					value: 20,
					color: 'green',
					msg: 'PD_RUN',
				},
				{
					value: 30,
					color: 'orange',
					msg: 'ENG',
				},
			],
			result: [
				{
					value: 10,
					color: 'red',
					msg: 'EQ_WAIT',
				},
				{
					value: 20,
					color: 'green',
					msg: 'PD_RUN',
				},
				{
					value: 30,
					color: 'orange',
					msg: 'ENG',
				},
			],
		},
		{
			line: 's3',
			machine: 'Printer-NS-0001(DEK-2)',
			isWarning: false,
			plan: [
				{
					value: 10,
					color: 'red',
					msg: 'EQ_WAIT',
				},
				{
					value: 20,
					color: 'green',
					msg: 'PD_RUN',
				},
				{
					value: 30,
					color: 'orange',
					msg: 'ENG',
				},
			],
			result: [
				{
					value: 10,
					color: 'red',
					msg: 'EQ_WAIT',
				},
				{
					value: 20,
					color: 'green',
					msg: 'PD_RUN',
				},
				{
					value: 30,
					color: 'orange',
					msg: 'ENG',
				},
			],
		},
		{
			line: 's4',
			machine: 'Printer-NS-0001(DEK-2)',
			isWarning: false,
			plan: [
				{
					value: 10,
					color: 'red',
					msg: 'EQ_WAIT',
				},
				{
					value: 20,
					color: 'green',
					msg: 'PD_RUN',
				},
				{
					value: 30,
					color: 'orange',
					msg: 'ENG',
				},
			],
			result: [
				{
					value: 10,
					color: 'red',
					msg: 'EQ_WAIT',
				},
				{
					value: 20,
					color: 'green',
					msg: 'PD_RUN',
				},
				{
					value: 30,
					color: 'orange',
					msg: 'ENG',
				},
			],
		},
	];

	equipment_detail = {
		isShow: false,
	};
	equipmentHandler () {
		this.equipment_detail.isShow = true;
	}
	alert_close () {
		this.equipment_detail.isShow = false;
	}

	isHostListener: Boolean = false;
	mouseevent (b: Boolean) {
		this.isHostListener = b;
	}
	@HostListener('document:click', ['$event'])
	onClick (event: MouseEvent) {
		if (this.isHostListener) return;
		if (this.line_sel.isShow) {
			this.line_sel.isShow = false;
		}
		if (this.equipment_filter.end.isShow) {
			this.equipment_filter.end.isShow = false;
		}
		if (this.equipment_filter.start.isShow) {
			this.equipment_filter.start.isShow = false;
		}
	}
}
