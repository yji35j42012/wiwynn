import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
	selector: 'app-alarm-center',
	standalone: true,
	imports: [CommonModule, FormsModule],
	templateUrl: './alarm-center.component.html',
	styleUrl: './alarm-center.component.scss',
})
export class AlarmCenterComponent {
	multsearch = {
		isShow: false,
		lists: [
			{ id: 0, isChecked: false, name: 'MA100000' },
			{ id: 1, isChecked: true, name: 'MA200000' },
			{ id: 2, isChecked: false, name: 'MA300000' },
			{ id: 3, isChecked: true, name: 'MA400000' },
			{ id: 4, isChecked: false, name: 'MA500000' },
			{ id: 5, isChecked: true, name: 'MA600000' },
		],
		showLists: [] as { id: number; isChecked: boolean; name: string }[],
		filterLists: [] as any[],
		searchTerm: '',
	};
	multsearchHandler () {
		this.multsearch.isShow = !this.multsearch.isShow;
	}
	searchEep () {
		this.multsearch.filterLists = this.multsearch.lists.filter((item) =>
			item.name.toLowerCase().includes(this.multsearch.searchTerm.toLowerCase())
		);
	}

	inpHandler (e: Event) {
		e.stopPropagation();
	}
	checkedHandler (e: Event, n: number) {
		e.stopPropagation();
		let s = this.multsearch.lists.findIndex((item) => item.id === n);
		if (this.multsearch.lists[s].isChecked) {
			this.multsearch.lists[s].isChecked = false;
			this.unChecked(e, n);
		} else {
			this.multsearch.lists[s].isChecked = true;
			this.multsearch.showLists.push(this.multsearch.lists[s]);
		}
	}
	unChecked (e: Event, n: number) {
		e.stopPropagation();
		let s = this.multsearch.lists.findIndex((item) => item.id === n);
		this.multsearch.lists[s].isChecked = false;
		const rObj = this.multsearch.showLists.findIndex((item) => item.id === n);
		if (rObj !== -1) {
			this.multsearch.showLists.splice(rObj, 1);
		}
	}

	date = {
		weekName: [
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
			'Sunday',
		],
		monthName: [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		],
		year: 0,
		month: 0,
		day: 0,
		week: 0,
	};

	ac_alert = {
		isShow: false,
	};
	acDetail () {
		this.ac_alert.isShow = true;
	}
	alert_close () {
		this.ac_alert.isShow = false;
	}

	tbData = {
		year: 2024, // 默認年份 2024
		month: 5, // 默認月份 3
		day: 8, // 默認日期 11
		week: 0,
		dates: [] as any[],
	};

	generateRandomDates (year: number, month: number) {
		const firstDayOfMonth = new Date(year, month - 1, 1).getDay(); // 獲取每月的第一天是星期幾（0表示星期日，1表示星期一）
		const daysInMonth = new Date(year, month, 0).getDate(); // 獲取該月份的天數
		const daysInPrevMonth = new Date(year, month - 1, 0).getDate(); // 上個月的天數
		this.tbData.dates = [];
		var weekObj = {
			c: '',
			d: 0,
			lists: [] as any[],
		};
		let week = [];

		// 添加每月第一天之前的日期（上個月的天數）
		for (
			let i = daysInPrevMonth - firstDayOfMonth + 1;
			i <= daysInPrevMonth;
			i++
		) {
			weekObj = {
				c: '_un',
				d: i,
				lists: [
					{ id: 0, lv: 'LV.1', num: 3, name: 'MA100001' },
					{ id: 1, lv: 'LV.2', num: 4, name: 'MA100002' },
				],
			};
			week.push(weekObj);
		}

		// 添加該月份的所有日期

		for (let i = 1; i <= daysInMonth; i++) {
			weekObj = {
				c: '',
				d: i,
				lists: [
					{ id: 0, lv: 'LV.1', num: 3, name: 'MA100001' },
					{ id: 1, lv: 'LV.2', num: 4, name: 'MA100002' },
					{ id: 2, lv: 'LV.3', num: 5, name: 'MA100003' },
					{ id: 3, lv: 'LV.3', num: 5, name: 'MA100004' },
					{ id: 4, lv: 'LV.3', num: 5, name: 'MA100005' },
					{ id: 5, lv: 'LV.3', num: 5, name: 'MA100006' },
					{ id: 6, lv: 'LV.4', num: 6, name: 'MA100007' },
				],
			};
			week.push(weekObj);
			if (week.length === 7) {
				this.tbData.dates.push(week);
				week = [];
			}
		}

		// 添加每月最後一天之後的日期（下個月的天數）
		const remainingDays = 7 - week.length;
		if (remainingDays > 0) {
			for (let i = 1; i <= remainingDays; i++) {
				weekObj = {
					c: '_un',
					d: i,
					lists: [],
				};
				week.push(weekObj);
			}
			this.tbData.dates.push(week);
		}

		console.log('watch', this.tbData.dates);
	}

	prevMonth () {
		this.tbData.month--;
		if (this.tbData.month === -1) {
			this.tbData.month = 11;
			this.tbData.year--;
		}
		this.tbData.week--;
		if (this.tbData.week === -1) {
			this.tbData.week = 6;
		}
		console.log('this.tbData.month', this.tbData.month);
		this.generateRandomDates(this.tbData.year, this.tbData.month + 1);
	}
	nextMonth () {
		this.tbData.month++;
		if (this.tbData.month === 12) {
			this.tbData.month = 0;
			this.tbData.year++;
		}
		this.tbData.week++;
		if (this.tbData.week === 7) {
			this.tbData.week = 0;
		}
		this.generateRandomDates(this.tbData.year, this.tbData.month + 1);
	}
	tbToday () {
		const currentDate = new Date();
		this.tbData.year = currentDate.getFullYear();
		this.tbData.month = currentDate.getMonth();
		this.tbData.day = currentDate.getDate();
		this.generateRandomDates(this.date.year, this.date.month + 1);
	}
	ngOnInit (): void {
		this.multsearch.lists.forEach((item) => {
			if (item.isChecked) {
				this.multsearch.showLists.push(item);
			}
		});

		this.multsearch.filterLists = this.multsearch.lists;

		const currentDate = new Date();
		this.date.year = currentDate.getFullYear();
		this.tbData.year = currentDate.getFullYear();

		this.date.month = currentDate.getMonth();
		this.tbData.month = currentDate.getMonth();

		this.date.day = currentDate.getDate();
		this.tbData.day = currentDate.getDate();

		this.date.week =
			currentDate.getDay() - 1 < 0
				? (this.date.week = 6)
				: currentDate.getDay() - 1;

		this.tbData.week =
			currentDate.getDay() - 1 < 0
				? (this.date.week = 6)
				: currentDate.getDay() - 1;

		this.generateRandomDates(
			currentDate.getFullYear(),
			currentDate.getMonth() + 1
		);
	}

	isHostListener: Boolean = false;
	mouseevent (b: Boolean) {
		this.isHostListener = b;
	}

	@HostListener('document:click', ['$event'])
	onClick (event: MouseEvent) {
		if (this.isHostListener) return;
		if (this.multsearch.isShow) {
			this.multsearch.isShow = false;
		}
	}
}
