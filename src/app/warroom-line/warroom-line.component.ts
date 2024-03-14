import { Component, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';

@Component({
	selector: 'app-warroom-line',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './warroom-line.component.html',
	styleUrl: './warroom-line.component.scss'
})
export class WarroomLineComponent {
	constructor(private el: ElementRef) { }
	@Input() lineEvent: any = {};
	@Output() closeEvent = new EventEmitter();
	chartBox: any
	chartEnergy: any
	tabEvent = {
		now: 0,
		lists: ['Line', 'Staff', 'Energy',]
	}
	tabSec = {
		now: 0,
		lists: ['In/Output', '產品達成率']
	}
	count = 0
	tabEnergy = {
		now: 0,
		lists: ['電使用量', '氣使用量', '水使用量']
	}
	tabHandler(num: number) {
		this.tabEvent.now = num
		if (num == 0) {
			this.chart_inout()
		} else if (num == 2) {
			this.chart_energy()
		}
	}
	tabSecHandler(num: number) {
		this.tabSec.now = num
		if (num == 0) {
			this.chart_inout()
		} else if (num == 1) {
			this.chart_inout1()
		}
	}
	tabEngergyHandler(num: number) {
		this.tabEnergy.now = num
		this.chart_energy()
	}
	chart_inout() {
		if (this.chartBox) { this.chartBox.destroy(); }
		this.chartBox = new Chart(this.el.nativeElement.querySelector('#myChart'), {
			type: 'line',
			data: {
				labels: [
					'08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00',
					'16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00',
					'00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00'
				],
				datasets: [
					{
						label: 'Dataset 1',
						data: [
							50, 100, 20, 30, 40, 20, 50,
							10, 50, 11, 77, 23, 56,
							70, 30, 20, 88, 23, 45,
							80, 50, 66, 99, 34, 89],
						backgroundColor: 'rgba(14, 156, 255, .2)',
						borderColor: '#0E9CFF',
						yAxisID: 'y',
						fill: true,
						borderWidth: 2,
					},
					{
						label: 'Dataset 2',
						data: [10, 50, 100, 110, 150, 180, 50, 10, 50, 100, 110, 150, 180, 50, 50, 100, 110, 150, 180, 50, 50, 100, 110, 150, 180],
						backgroundColor: 'rgba(28, 207, 0, .2)',
						borderColor: '#1CCF00',
						yAxisID: 'y1',
						fill: true,
						borderWidth: 2,
					}
				]
			},

			options: {
				responsive: true,
				interaction: {
					mode: 'index',
					intersect: false,
				},
				// stacked: false,
				plugins: {
					title: {
						display: false,
					},
					legend: {
						display: false,
					}
				},
				scales: {
					x: {
						border: {
							dash: [2, 4],
						},
					},
					y: {
						type: 'linear',
						display: true,
						position: 'left',
						ticks: {
							color: '#0E9CFF',
						},
						border: {
							dash: [2, 4],
						},
					},
					y1: {
						type: 'linear',
						display: true,
						position: 'left',
						ticks: {
							color: '#1CB404',
						},
						border: {
							dash: [2, 4],
						},
					},

				}
			}
		});
	}
	chart_inout1() {
		if (this.chartBox) { this.chartBox.destroy(); }
		this.chartBox = new Chart(this.el.nativeElement.querySelector('#myChart'), {
			type: 'line',
			data: {
				labels: [
					'08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00',
					'16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00',
					'00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00'
				],
				datasets: [
					{
						label: 'Dataset 1',
						data: [
							50, 100, 20, 30, 40, 20, 50,
							10, 50, 11, 77, 23, 56,
							70, 30, 20, 88, 23, 45,
							80, 50, 66, 99, 34, 89],
						backgroundColor: 'rgba(14, 156, 255, .2)',
						borderColor: '#0E9CFF',
						yAxisID: 'y',
						fill: true,
						borderWidth: 2,
					},
				]
			},

			options: {
				responsive: true,
				interaction: {
					mode: 'index',
					intersect: false,
				},
				// stacked: false,
				plugins: {
					title: {
						display: false,
					},
					legend: {
						display: false,
					}
				},
				scales: {
					x: {
						border: {
							dash: [2, 4],
						},
					},
					y: {
						type: 'linear',
						display: true,
						position: 'left',
						ticks: {
							color: '#0E9CFF',
						},
						border: {
							dash: [2, 4],
						},
					},

				}
			}
		});
	}
	chart_energy() {
		if (this.chartEnergy) { this.chartEnergy.destroy(); }
		if (window.innerWidth > 1300) {
			this.el.nativeElement.querySelector('#energy_Chart').width = 1440
			this.el.nativeElement.querySelector('#energy_Chart').height = 320
		} else {
			this.el.nativeElement.querySelector('#energy_Chart').width = 1440
			this.el.nativeElement.querySelector('#energy_Chart').height = 280
		}
		this.chartEnergy = new Chart(this.el.nativeElement.querySelector('#energy_Chart'), {
			type: 'line',
			data: {
				labels: [
					'08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00',
					'16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00',
					'00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00'
				],
				datasets: [
					{
						label: 'Dataset 1',
						data: [
							50, 100, 20, 30, 40, 20, 50,
							10, 50, 11, 77, 23, 56,
							70, 30, 20, 88, 23, 45,
							80, 50, 66, 99, 34, 89],
						backgroundColor: 'rgba(14, 156, 255, .2)',
						borderColor: '#0E9CFF',
						yAxisID: 'y',
						fill: true,
						borderWidth: 2,
					},
				]
			},

			options: {
				responsive: true,
				interaction: {
					mode: 'index',
					intersect: false,
				},
				// stacked: false,
				plugins: {
					title: {
						display: false,
					},
					legend: {
						display: false,
					}
				},
				scales: {
					x: {
						border: {
							dash: [2, 4],
						},
					},
					y: {
						type: 'linear',
						display: true,
						position: 'left',
						ticks: {
							color: '#0E9CFF',
						},
						border: {
							dash: [2, 4],
						},
					},

				}
			}
		});
	}
	ngDoCheck(): void {
		if (this.count !== 0) return
		if (this.tabEvent.now == 0) {
			if (this.lineEvent.show && !this.lineEvent.class) {
				setTimeout(() => {
					this.chart_inout()
					this.count = 1
				}, 100);
			}
		} else if (this.tabEvent.now == 2) {
			if (this.lineEvent.show && !this.lineEvent.class) {
				setTimeout(() => {
					this.chart_energy()
					this.count = 1
				}, 100);
			}
		}

	}
	alert_close(event: String) {
		this.closeEvent.emit(event);
		setTimeout(() => {
			this.count = 0
		}, 500);
	}
}
