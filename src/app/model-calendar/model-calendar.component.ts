import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelSelectComponent } from '../model-select/model-select.component';

@Component({
	selector: 'app-model-calendar',
	standalone: true,
	imports: [CommonModule, ModelSelectComponent],
	templateUrl: './model-calendar.component.html',
	styleUrl: './model-calendar.component.scss',
})
export class ModelCalendarComponent {
	@Input() calendar_content: any = {};
	@Output() calendar_return = new EventEmitter();
	hour_sel = {
		name: 'hour_sel',
		title: 0,
		lists: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', 10, 11],
		isShow: false,
		msg: '',
	};
	time_sel = {
		name: 'time_sel',
		title: 0,
		lists: [
			'00',
			'01',
			'02',
			'03',
			'04',
			'05',
			'06',
			'07',
			'08',
			'09',
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24,
			25,
			26,
			27,
			28,
			29,
			30,
			31,
			32,
			33,
			34,
			35,
			36,
			37,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			46,
			47,
			48,
			49,
			50,
			51,
			52,
			53,
			54,
			55,
			56,
			57,
			58,
			59,
		],
		isShow: false,
		msg: '',
	};
	isAM = false
	ampm(s: boolean) {
		this.isAM = s
	}
	selShow(s: string) {
		if (s == 'hour_sel') {
			this.hour_sel.isShow = !this.hour_sel.isShow;
			this.time_sel.isShow = false;
		} else if (s == 'time_sel') {
			this.time_sel.isShow = !this.time_sel.isShow;
			this.hour_sel.isShow = false;
		}
	}
	selHandler(s: any) {
		if (s.name == 'hour_sel') {
			this.hour_sel.title = s.title;
			this.hour_sel.isShow = false;
		} else if (s.name == 'time_sel') {
			this.time_sel.title = s.title;
			this.time_sel.isShow = false;
		}
	}

	year: number = 2024; // 默認年份 2024
	month: number = 3; // 默認月份 3
	day: number = 11; // 默認日期 11
	hour: number = 0;
	min: number = 0;
	dates: any[] = [];

	generateRandomDates(year: number, month: number) {
		const firstDayOfMonth = new Date(year, month - 1, 1).getDay(); // 獲取每月的第一天是星期幾（0表示星期日，1表示星期一）
		const daysInMonth = new Date(year, month, 0).getDate(); // 獲取該月份的天數
		this.dates = [];
		let week = [];
		// 添加每月第一天之前的日期
		for (let i = 0; i < firstDayOfMonth; i++) {
			week.push(null);
		}

		// 添加該月份的所有日期
		for (let i = 1; i <= daysInMonth; i++) {
			const date = { year: year, month: month, day: i };
			week.push(i);
			if (week.length === 7 || i === daysInMonth) {
				this.dates.push(week);
				week = [];
			}
		}
	}
	returnHandler(date: number) {
		this.day = date;
		this.calendar_return.emit({
			year: this.year,
			month: this.month,
			day: this.day,
			hour: this.hour_sel.title,
			min: this.time_sel.title,
		});
	}
	prevMonth() {
		this.month--;
		if (this.month === 0) {
			this.month = 12;
			this.year--;
		}
		this.generateRandomDates(this.year, this.month);
	}

	nextMonth() {
		this.month++;
		if (this.month === 13) {
			this.month = 1;
			this.year++;
		}
		this.generateRandomDates(this.year, this.month);
	}
	ngOnInit(): void {
		this.year = this.calendar_content.year;
		this.month = this.calendar_content.month;
		this.day = this.calendar_content.day;
		this.hour_sel.title = this.calendar_content.hour
		this.time_sel.title = this.calendar_content.min
		this.generateRandomDates(this.year, this.month);
	}
}
