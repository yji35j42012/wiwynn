import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ModelCalendarComponent } from '../model-calendar/model-calendar.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
	selector: 'app-e-process-search',
	standalone: true,
	imports: [CommonModule, ModelCalendarComponent, FormsModule],
	templateUrl: './e-process-search.component.html',
	styleUrl: './e-process-search.component.scss',
})
export class EProcessSearchComponent {
	constructor(private router: Router) { }
	epk_filter = {
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

		factory: {
			isShow: false,
			showSingle: '請選擇',
			singleLists: [] as { id: number; isChecked: boolean; name: string }[],
			showMult: [] as { id: number; isChecked: boolean; name: string }[],
			multLists: [] as { id: number; isChecked: boolean; name: string }[],
		},
		line: {
			isShow: false,
			showSingle: '請選擇',
			singleLists: [] as { id: number; isChecked: boolean; name: string }[],
			showMult: [] as { id: number; isChecked: boolean; name: string }[],
			multLists: [] as { id: number; isChecked: boolean; name: string }[],
		},
		machine: {
			isShow: false,
			showSingle: '請選擇',
			singleLists: [] as { id: number; isChecked: boolean; name: string }[],
			showMult: [] as { id: number; isChecked: boolean; name: string }[],
			multLists: [] as { id: number; isChecked: boolean; name: string }[],
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
	isQuery = false;
	queryHandler() {
		this.isQuery = true;
	}
	dateHanler(event: MouseEvent, s: string) {
		event.stopPropagation();
		this.epk_filter.factory.isShow = false;
		this.epk_filter.machine.isShow = false;
		this.epk_filter.line.isShow = false;
		var item: any;
		if (s == 'start') {
			this.epk_filter.end.isShow = false;
			this.epk_filter.start.isShow = !this.epk_filter.start.isShow;
			item = this.epk_filter.start;
		} else if (s == 'end') {
			this.epk_filter.start.isShow = false;
			this.epk_filter.end.isShow = !this.epk_filter.end.isShow;
			item = this.epk_filter.end;
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
			item = this.epk_filter.start;
		} else if (this.calendar.state == 'end') {
			item = this.epk_filter.end;
		}
		item.isShow = false;
		item.month = obj.month;
		item.day = obj.day;
		item.hour = obj.hour;
		item.min = obj.min;
	}
	selHandler(event: MouseEvent, s: string) {
		event.stopPropagation();
		let item = this.epk_filter;

		this.epk_filter.start.isShow = false;
		this.epk_filter.end.isShow = false;
		switch (s) {
			case 'factory':
				item.factory.isShow = !item.factory.isShow;
				item.line.isShow = false;
				item.machine.isShow = false;
				break;
			case 'line':
				item.line.isShow = !item.line.isShow;
				item.factory.isShow = false;
				item.machine.isShow = false;
				break;
			case 'machine':
				item.machine.isShow = !item.machine.isShow;
				item.line.isShow = false;
				item.factory.isShow = false;
				break;
			default:
				break;
		}
	}
	factorySingle(event: Event, i: number) {
		event.stopPropagation();
		let item = this.epk_filter.factory;
		item.showSingle = item.singleLists[i].name;
		this.epk_filter.factory.singleLists[i].isChecked =
			!this.epk_filter.factory.singleLists[i].isChecked;
	}
	factoryMult(e: Event, i: number) {
		console.log('aadf')
		e.stopPropagation();
		let item = this.epk_filter.factory;
		let s = item.multLists.findIndex((item) => item.id === i);
		if (item.multLists[s].isChecked) {
			item.showMult.push(this.epk_filter.factory.multLists[i]);
		} else {
			this.unChecked(e, 'factory', i);
		}
	}
	removeFactoryMult(e: Event, id: number) {
		e.stopPropagation();
		let s = this.epk_filter.factory.multLists.findIndex(item => item.id === id);
		this.unChecked(e, 'factory', s);
	}
	lineSingle(i: number) {
		let item = this.epk_filter.line;
		item.showSingle = item.singleLists[i].name;
		this.epk_filter.line.singleLists[i].isChecked =
			!this.epk_filter.line.singleLists[i].isChecked;
	}
	lineMult(e: Event, i: number) {
		e.stopPropagation();
		let item = this.epk_filter.line;
		let s = item.multLists.findIndex((item) => item.id === i);
		if (item.multLists[s].isChecked) {
			item.showMult.push(this.epk_filter.line.multLists[i]);
		} else {
			this.unChecked(e, 'line', i);
		}
	}
	removeLineMult(e: Event, id: number) {
		e.stopPropagation();
		let s = this.epk_filter.line.multLists.findIndex(item => item.id === id);
		this.unChecked(e, 'line', s);
	}

	machineSingle(i: number) {
		let item = this.epk_filter.machine;
		item.showSingle = item.singleLists[i].name;
		this.epk_filter.machine.singleLists[i].isChecked =
			!this.epk_filter.machine.singleLists[i].isChecked;
	}
	machineMult(e: Event, i: number) {
		e.stopPropagation();
		let item = this.epk_filter.machine;
		let s = item.multLists.findIndex((item) => item.id === i);

		if (item.multLists[s].isChecked) {
			item.showMult.push(this.epk_filter.machine.multLists[i]);
		} else {
			this.unChecked(e, 'machine', i);
		}
	}
	removeMachineMult(e: Event, id: number) {
		e.stopPropagation();
		let s = this.epk_filter.machine.multLists.findIndex(item => item.id === id);
		this.unChecked(e, 'machine', s);
	}
	unChecked(e: Event, s: string, n: number) {
		e.stopPropagation();
		var objItem: any;
		var count: any;
		var rObj: any;
		switch (s) {
			case 'factory':
				objItem = this.epk_filter.factory;
				count = this.epk_filter.factory.multLists.findIndex(
					(item) => item.id === n
				);
				rObj = this.epk_filter.factory.showMult.findIndex(
					(item) => item.id === n
				);
				break;
			case 'line':
				objItem = this.epk_filter.line;
				count = this.epk_filter.line.multLists.findIndex(
					(item) => item.id === n
				);
				rObj = this.epk_filter.line.showMult.findIndex((item) => item.id === n);
				break;
			case 'machine':
				objItem = this.epk_filter.machine;
				count = this.epk_filter.machine.multLists.findIndex(
					(item) => item.id === n
				);
				rObj = this.epk_filter.machine.showMult.findIndex(
					(item) => item.id === n
				);
				break;
			default:
				break;
		}

		objItem.multLists[count].isChecked = false;
		if (rObj !== -1) {
			objItem.showMult.splice(rObj, 1);
		}
	}
	generateHandler() {
		this.router.navigate(['/home/E-Process/detail/']);
	}
	ngOnInit(): void {
		this.epk_filter.factory.singleLists.push(
			{ id: 0, isChecked: false, name: 'F9C1' },
			{ id: 1, isChecked: false, name: 'F9C2' },
			{ id: 2, isChecked: false, name: 'F9C3' },
			{ id: 3, isChecked: false, name: 'F9C4' },
			{ id: 4, isChecked: false, name: 'F9C5' },
			{ id: 5, isChecked: false, name: 'F9C6' },
			{ id: 6, isChecked: false, name: 'F9C7' },
			{ id: 7, isChecked: false, name: 'F9C8' }
		);
		this.epk_filter.factory.multLists.push(
			{ id: 0, isChecked: false, name: 's1' },
			{ id: 1, isChecked: false, name: 's2' },
			{ id: 2, isChecked: false, name: 's3' },
			{ id: 3, isChecked: false, name: 's4' },
			{ id: 4, isChecked: false, name: 's5' },
			{ id: 5, isChecked: false, name: 's6' },
			{ id: 6, isChecked: false, name: 's7' },
			{ id: 7, isChecked: false, name: 's8' },
			{ id: 8, isChecked: false, name: 's9' },
			{ id: 9, isChecked: false, name: 's10' },
			{ id: 10, isChecked: false, name: 's11' },
			{ id: 11, isChecked: false, name: 's12' },
			{ id: 12, isChecked: false, name: 's13' },
			{ id: 13, isChecked: false, name: 's14' }
		);
		this.epk_filter.line.singleLists.push(
			{ id: 0, isChecked: false, name: 's1' },
			{ id: 1, isChecked: false, name: 's2' },
			{ id: 2, isChecked: false, name: 's3' },
			{ id: 3, isChecked: false, name: 's4' },
			{ id: 4, isChecked: false, name: 's5' },
			{ id: 5, isChecked: false, name: 's6' },
			{ id: 6, isChecked: false, name: 's7' },
			{ id: 7, isChecked: false, name: 's8' }
		);
		this.epk_filter.line.multLists.push(
			{ id: 0, isChecked: false, name: 'Printer' },
			{ id: 1, isChecked: false, name: 'Mounter' },
			{ id: 2, isChecked: false, name: 'Reflow' },
			{ id: 3, isChecked: false, name: 'POSTAOI' },
			{ id: 4, isChecked: false, name: 'SPI' },
			{ id: 5, isChecked: false, name: 'Router' }
		);
		this.epk_filter.machine.singleLists.push(
			{ id: 0, isChecked: false, name: 'Printer' },
			{ id: 1, isChecked: false, name: 'Mounter' },
			{ id: 2, isChecked: false, name: 'Reflow' },
			{ id: 3, isChecked: false, name: 'POSTAOI' },
			{ id: 4, isChecked: false, name: 'SPI' },
			{ id: 5, isChecked: false, name: 'Router' }
		);
		this.epk_filter.machine.multLists.push(
			{ id: 0, isChecked: false, name: 'Printer-NS-0001' },
			{ id: 1, isChecked: false, name: 'Printer-NS-0002' },
			{ id: 2, isChecked: false, name: 'Printer-NS-0003' },
			{ id: 3, isChecked: false, name: 'Printer-NS-0004' },
			{ id: 4, isChecked: false, name: 'Printer-NS-0006' },
			{ id: 5, isChecked: false, name: 'Printer-NS-0006' }
		);
	}

	isHostListener: Boolean = false;
	mouseevent(b: Boolean) {
		this.isHostListener = b;
	}
	@HostListener('document:click', ['$event'])
	onClick(event: MouseEvent) {
		if (this.isHostListener) return;
		if (this.epk_filter.factory.isShow) {
			this.epk_filter.factory.isShow = false;
		}
		if (this.epk_filter.line.isShow) {
			this.epk_filter.line.isShow = false;
		}
		if (this.epk_filter.machine.isShow) {
			this.epk_filter.machine.isShow = false;
		}
		if (this.epk_filter.start.isShow) {
			this.epk_filter.start.isShow = false;
		}
		if (this.epk_filter.end.isShow) {
			this.epk_filter.end.isShow = false;
		}
	}
}
