import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-model-calendar',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './model-calendar.component.html',
	styleUrl: './model-calendar.component.scss'
})
export class ModelCalendarComponent {
	year: number = 2024; // 默认年份为 2024
	month: number = 3; // 默认月份为 3
	dates: any[] = [];
	generateRandomDates(year: number, month: number) {
		const firstDayOfMonth = new Date(year, month - 1, 1).getDay(); // 获取每月的第一天是星期几（0表示星期日，1表示星期一，以此类推）
		const daysInMonth = new Date(year, month, 0).getDate(); // 获取该月份的天数
		this.dates = [];
		let week = [];

		// 添加每月第一天之前的日期
		for (let i = 0; i < firstDayOfMonth; i++) {
			week.push(null);
		}

		// 添加该月份的所有日期
		for (let i = 1; i <= daysInMonth; i++) {
			const date = { "year": year, "month": month, "day": i };
			week.push(i);
			if (week.length === 7 || i === daysInMonth) {
				this.dates.push(week);
				week = [];
			}
		}
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
		this.generateRandomDates(this.year, this.month)
	}


}
