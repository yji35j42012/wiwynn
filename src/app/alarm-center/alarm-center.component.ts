import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-alarm-center',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './alarm-center.component.html',
	styleUrl: './alarm-center.component.scss'
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
		showLists: [] as { id: number, isChecked: boolean, name: string }[],
	}
	multsearchHandler() {
		this.multsearch.isShow = !this.multsearch.isShow
	}
	inpHandler(e: Event) {
		e.stopPropagation();
	}
	checkedHandler(e: Event, n: number) {
		e.stopPropagation();
		let s = this.multsearch.lists.findIndex(item => item.id === n);
		if (this.multsearch.lists[s].isChecked) {
			this.multsearch.lists[s].isChecked = false
			this.unChecked(e, n)
		} else {
			this.multsearch.lists[s].isChecked = true
			this.multsearch.showLists.push(this.multsearch.lists[s])
		}
	}
	unChecked(e: Event, n: number) {
		e.stopPropagation();
		let s = this.multsearch.lists.findIndex(item => item.id === n);
		this.multsearch.lists[s].isChecked = false
		const rObj = this.multsearch.showLists.findIndex(item => item.id === n);
		if (rObj !== -1) {
			this.multsearch.showLists.splice(rObj, 1);
		}
	}
	ngOnInit(): void {
		this.multsearch.lists.forEach(item => {
			if (item.isChecked) {
				this.multsearch.showLists.push(item)
			}
		});
	}

	ac_alert = {
		isShow: false
	}

	alert_close() {
		this.ac_alert.isShow = false
	}
}
