import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelSelectComponent } from '../model-select/model-select.component';
import { AlertDelmsgComponent } from '../alert-delmsg/alert-delmsg.component';

@Component({
	selector: 'app-option-kpitarget',
	standalone: true,
	imports: [CommonModule, ModelSelectComponent, AlertDelmsgComponent],
	templateUrl: './option-kpitarget.component.html',
	styleUrl: './option-kpitarget.component.scss'
})
export class OptionKpitargetComponent {

	kpitarget = {
		data: [] as { term: string, date: string, number: number, range: string, rotate: string }[],
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
		this.kpitarget.data.push(
			{
				term: 'FPYR',
				date: '2023/12月',
				number: 99,
				range: this.calcNum(99),
				rotate: this.calcRotate(99),
			},
			{
				term: 'UPPH',
				date: '2023/11月',
				number: 70,
				range: this.calcNum(70),
				rotate: this.calcRotate(70),
			},

			{
				term: 'FPYR',
				date: '2023/10月',
				number: 45,
				range: this.calcNum(45),
				rotate: this.calcRotate(45),
			},
			{
				term: 'UPPH',
				date: '2023/9月',
				number: 20,
				range: this.calcNum(20),
				rotate: this.calcRotate(20),
			}
		)
	}
	algorithm_sel = {
		name: 'algorithm_sel',
		title: 'DIP',
		lists: ['DIP', 'DIP1'],
		isShow: false,
		msg: '算法項目',
	};
	selShow(s: string) {
		if (s == 'algorithm_sel') {
			this.algorithm_sel.isShow = !this.algorithm_sel.isShow;
		}
	}
	selHandler(s: any) {
		if (s.name == 'algorithm_sel') {
			this.algorithm_sel.title = s.title;
			this.algorithm_sel.isShow = false;
		}
	}
	kpitarget_calendar = {
		isShow: false,
		year: [] as any,
		month: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月',],
	}
	edit_alert = {
		state: '',
		isShow: false,
		trem: '',
		target: 0,
		date_y: 0,
		date_m: "",
		isYear: true
	}
	alertMsg = {
		show: false,
		title: '刪除KPI算法Target',
		msg: '您確定要刪除此KPI算法Target？',
		str: 'delmsg',
	};
	editAlert(s: string, i: number) {
		this.edit_alert.state = s;
		this.edit_alert.isShow = true
		if (s == 'add') {
			var my_date = new Date();
			var my_year = my_date.getFullYear()
			var my_month = this.kpitarget_calendar.month[my_date.getMonth()]
			this.edit_alert.date_y = my_year
			this.edit_alert.date_m = my_month
		} else {
			let s = this.kpitarget.data[i].date.split('/')
			this.edit_alert.date_y = parseInt(s[0])
			this.edit_alert.date_m = s[1]

		}
	}
	getDate() {
		this.kpitarget_calendar.isShow = true
		this.edit_alert.isYear = true
		var my_date = new Date();
		var my_year = this.edit_alert.state == 'add' ? my_date.getFullYear() : 2023;
		var my_month = this.edit_alert.state == 'add' ? my_date.getMonth() : '3月';
		this.kpitarget_calendar.year = []
		for (let i = 0; i < 9; i++) {
			console.log('my_year', my_year - 4 + i == my_year);
			this.kpitarget_calendar.year.push({
				y: my_year - 4 + i,
				isOn: my_year - 4 + i == my_year
			})
			console.log('my_year',);
		}
		// this.year_data = my_year
	}
	yearHanler(y: number) {
		this.edit_alert.date_y = y
		this.edit_alert.isYear = false
	}
	monthHanler(m: string) {
		this.edit_alert.date_m = m
		this.kpitarget_calendar.isShow = false
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
