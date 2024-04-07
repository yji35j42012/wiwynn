import { Component, ViewChild, ElementRef, } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ModelCalendarComponent } from '../model-calendar/model-calendar.component';
import { ModelSelcheckComponent } from '../model-selcheck/model-selcheck.component';

import Chart from 'chart.js/auto';

@Component({
	selector: 'app-e-kpi-detail',
	standalone: true,
	imports: [CommonModule, ModelCalendarComponent, ModelSelcheckComponent],
	templateUrl: './e-kpi-detail.component.html',
	styleUrl: './e-kpi-detail.component.scss'
})
export class EKpiDetailComponent {

	constructor(private el: ElementRef, private location: Location) { }

	goBack() {
		this.location.back();
	}

	isTime = true
	isIssue = false

	changeMode(s: string) {
		s == 't' ? this.isTime = true : this.isTime = false
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
	mofilter_sel = {
		name: 'mofilter_sel',
		showLists: [] as { id: number; isChecked: boolean; name: string }[],
		lists: [
			{ id: 0, isChecked: false, name: 'Select All' },
			{ id: 1, isChecked: false, name: 'B55.04S1A.M001' },
			{ id: 2, isChecked: false, name: 'B55.04S1A.M002' },
			{ id: 3, isChecked: false, name: 'B55.04S1A.M003' },
			{ id: 4, isChecked: false, name: 'B55.04S1A.M004' },
			{ id: 5, isChecked: false, name: 'B55.04S1A.M005' },
			{ id: 6, isChecked: false, name: 'B55.04S1A.M006' },
			{ id: 6, isChecked: false, name: 'B55.04S1A.M007' },
			{ id: 6, isChecked: false, name: 'B55.04S1A.M008' },
			{ id: 6, isChecked: false, name: 'B55.04S1A.M009' },
			{ id: 6, isChecked: false, name: 'B55.04S1A.M0010' },
		],
		isShow: false,
		msg: '',
	}
	selCheckShow(s: any) {
		if (s == 'line_sel') {
			this.line_sel.isShow = !this.line_sel.isShow;
			this.stage_sel.isShow = false;
			this.mofilter_sel.isShow = false;
		} else if (s == 'stage_sel') {
			this.stage_sel.isShow = !this.stage_sel.isShow;
			this.line_sel.isShow = false;
			this.mofilter_sel.isShow = false;
		} else if (s == 'mofilter_sel') {
			this.mofilter_sel.isShow = !this.mofilter_sel.isShow;
			this.line_sel.isShow = false;
			this.stage_sel.isShow = false;
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
		} else if (obj.name == 'mofilter_sel') {
			w = this.mofilter_sel
			rObj = this.mofilter_sel.showLists.findIndex(
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

	ngAfterViewInit(): void {
		this.getChart()
	}
	@ViewChild('gridCanvas') gridCanvas!: ElementRef<HTMLCanvasElement>;
	@ViewChild('lineCanvas') lineCanvas!: ElementRef<HTMLCanvasElement>;
	@ViewChild('gridGroup') gridGroup!: ElementRef<HTMLCanvasElement>;

	chartmouseMove(e: MouseEvent, i: number) {
		const button = e.target as HTMLButtonElement;
		const rect = button.getBoundingClientRect();
		const x = rect.left;
		const y = rect.top;
		this.chart_time.isChartdetail = true
		let item = this.el.nativeElement.querySelector('#green' + i)
		let item2 = this.el.nativeElement.querySelector('#chartbox_group')
		let newX: number
		if (x + item.offsetWidth + 344 > window.innerWidth) {
			newX = x - 344
		} else {
			newX = x + item.offsetWidth + 10
		}
		let newY = y + item.offsetHeight - item2.offsetHeight - 92
		this.chart_time.chartdetail_x = newX
		this.chart_time.chartdetail_y = newY
	}
	chartmouseLeave() {
		this.chart_time.isChartdetail = false
	}

	chartBox: any
	chartBox2: any
	issueHanler(s: boolean) {

		this.isIssue = s
		if (this.isIssue) {
			setTimeout(() => {
				this.getIssChart()
			}, 10);
		} else {
			setTimeout(() => {
				this.getChart()
			}, 10);
		}
	}
	getChart() {
		if (this.chartBox) { this.chartBox.destroy(); }
		this.chartBox = new Chart(this.el.nativeElement.querySelector('#myChart'), {
			type: 'bar',
			data: {
				labels: [
					'08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00',
					'16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00',
					'00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00'
				], // 標題
				datasets: [
					{
						label: "",
						data: [10, 20, 30, 40, 50, 10, 20, 30, 40, 50, 10, 20, 30, 40, 50, 10, 20, 30, 40, 50, 10, 20, 30, 40, 50,],
						stack: '0',
						backgroundColor: '#35BE13',
					},
				]
			},
			options: {

				plugins: {
					title: {
						display: true,
					},
					tooltip: {
						enabled: true,
						callbacks: {
							title: () => "",
							label: (tooltipItem) => {
								var m = ['Time:10/28 20:00'];
								m.push("Target:98.5%");
								m.push("Rate:100%");
								m.push("Max Pass:1");
								m.push("Line:D3");
								m.push("Stage:TA");
								return m
							}
						}
					},
					legend: {
						display: false, // 隐藏图例
					}
				},
				responsive: true,
				scales: {

					x: {
						border: {
							dash: [2, 4],
						},
					},
					y: {
						border: {
							dash: [2, 4],
						},
					},
					y1: {
						position: 'right', // Y1 轴位置在右侧
						grid: {
							display: false, // 不显示网格线
						}
					}
				}
			}
		});
	}
	getIssChart() {
		if (this.chartBox2) { this.chartBox2.destroy(); }
		this.chartBox2 = new Chart(this.el.nativeElement.querySelector('#issueChart'), {
			type: 'bar',
			data: {
				labels: ['D2-AC', 'D2-AC', 'D2-BD', 'D2-FG', 'D2-IA', 'D2-PF', 'D2-T1', 'D2-TA', 'D2-TD',], // 標題
				datasets: [

					{
						label: "",
						data: [10, 20, 30, 40, 50, 10, 20, 30, 40],
						stack: '0',
						backgroundColor: '#35BE13',
					},
					{
						label: '',
						data: [20, 30, 40, 50, 60, 20, 30, 40, 50],
						stack: '0',
						backgroundColor: '#FB9823',
					},
					{
						label: '',
						data: [20, 30, 40, 50, 60, 20, 30, 40, 50],
						stack: '0',
						backgroundColor: '#FA2E2E',
					}
				]
			},
			options: {
				plugins: {
					title: {
						display: true,
					},
					tooltip: {
						enabled: true,
						callbacks: {
							title: () => "",
							label: (tooltipItem) => {
								var m = ['Time:10/28 20:00'];
								m.push("Target:98.5%");
								m.push("Rate:100%");
								m.push("Max Pass:1");
								m.push("Line:D3");
								m.push("Stage:TA");
								return m
							}
						}
					},
					legend: {
						display: false, // 隐藏图例
					}
				},
				responsive: true,
				scales: {

					x: {
						grid: {
							display: false, // 不显示网格线
						}

					},
					y: {
						border: {
							dash: [2, 4],
						},
					},
				},
			}
		});
	}

	chart_time = {
		
		isChartdetail: false,
		chartdetail_x: 0,
		chartdetail_y: 0,
	}
	chart_issue = {
		
		isChartdetail: false,
		chartdetail_x: 0,
		chartdetail_y: 0,
	}
	chart_tb = {
		// FPYR,UPPH,OEE	
		state: "FPYR2"
	}


	chartHandler(s: string) {
		this.chart_tb.state = s
	}




	fpyr2_table = [
		{
			title: "TD.DIP_FUNTION_A ",
			total: 10,
			data: [
				{
					stage: "TD.DIP_FUNTION_A",
					errorcode: "BFT_0012",
					defectsymptom: "其他 NG",
					qty: 7,
					fr: 63.64,
					reasoncode: "M_07",
					reasondescription: "零件功能不良/Component Function NG",
					location: "C1248",
					qty2: 1,
					fr2: 9.09,
				},
				{
					stage: "",
					errorcode: "",
					defectsymptom: "",
					qty: '',
					fr: '',
					reasoncode: "",
					reasondescription: "",
					location: "C1248",
					qty2: 1,
					fr2: 9.09,
				},
			],
			ismore: true,
		},
		{
			title: "TD.DIP_FUNTION_B",
			total: 5,
			data: [
				{
					stage: "TD.DIP_FUNTION_A",
					errorcode: "BFT_0012",
					defectsymptom: "其他 NG",
					qty: 7,
					fr: 63.64,
					reasoncode: "M_07",
					reasondescription: "零件功能不良/Component Function NG",
					location: "C1248",
					qty2: 1,
					fr2: 9.09,
				},
				{
					stage: "",
					errorcode: "",
					defectsymptom: "",
					qty: '',
					fr: '',
					reasoncode: "",
					reasondescription: "",
					location: "C1248",
					qty2: 1,
					fr2: 9.09,
				},
			],
			ismore: false,
		}
	]

	kpiMoreBtn(i: number) {
		for (let x = 0; x < this.fpyr2_table.length; x++) {
			const element = this.fpyr2_table[x];
			element.ismore = false
		}
		this.fpyr2_table[i].ismore = true

	}
}
