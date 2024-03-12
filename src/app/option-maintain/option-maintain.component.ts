import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelSelectComponent } from '../model-select/model-select.component';

@Component({
	selector: 'app-option-maintain',
	standalone: true,
	imports: [CommonModule, ModelSelectComponent],
	templateUrl: './option-maintain.component.html',
	styleUrl: './option-maintain.component.scss'
})
export class OptionMaintainComponent {
	// 狀態代碼過濾
	filter_maintain = {
		isShow: false,
	}
	filterMatintain () {
		this.filter_maintain.isShow = !this.filter_maintain.isShow
	}
	filter_color = {
		isShow: false,
	}
	filterColor () {
		this.filter_color.isShow = !this.filter_color.isShow
	}
	type_selete = {
		name: 'type_selete',
		title: "Loss",
		lists: ['Normal', 'Loss', 'Charge'],
		isShow: false,
		msg: 'Type',
	}
	selShow (s: string) {
		if (s == 'type_selete') {
			this.type_selete.isShow = !this.type_selete.isShow;
		}
	}
	selHandler (s: any) {
		if (s.name == 'type_selete') {
			this.type_selete.title = s.title;
			this.type_selete.isShow = false;
		}
	}
	editAlert = {
		state: '',
		isShow: false
	}

	delAlert = {
		isShow: false
	}
	multsearch = {
		isShow: false,
		lists: [
			{ id: 0, isChecked: false, name: 'Darren_KC_Huang@wiwynn.com' },
			{ id: 1, isChecked: true, name: 'Vencent_Su@wiwynn.com' },
			{ id: 2, isChecked: false, name: 'jackson.graham@example.com' },
			{ id: 3, isChecked: true, name: 'kenzi.lawson@example.com' },
			{ id: 4, isChecked: false, name: 'Jenny Wilson' },
			{ id: 5, isChecked: true, name: 'curtis.weaver@example.com' },
		],
		showLists: [] as { id: number, isChecked: boolean, name: string }[],
	}

	ngOnInit (): void {
		this.multsearch.lists.forEach(item => {
			if (item.isChecked) {
				this.multsearch.showLists.push(item)
			}
		});
	}
	editHandler (s: string) {
		this.editAlert.state = s
		this.editAlert.isShow = true
	}
	checkedHandler (e: Event, n: number) {
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
	unChecked (e: Event, n: number) {
		e.stopPropagation();
		let s = this.multsearch.lists.findIndex(item => item.id === n);
		this.multsearch.lists[s].isChecked = false
		const rObj = this.multsearch.showLists.findIndex(item => item.id === n);
		if (rObj !== -1) {
			this.multsearch.showLists.splice(rObj, 1);
		}
	}
	multsearchHandler () {
		this.multsearch.isShow = !this.multsearch.isShow
	}
	inpHandler (e: Event) {
		e.stopPropagation();
	}
	delHandler () {
		this.delAlert.isShow = true
	}
	alert_close (s: string) {
		switch (s) {
			case 'editAlert':
				this.editAlert.isShow = false
				break;

			case 'delAlert':
				this.delAlert.isShow = false
				break;
			default:
				break;
		}
	}
}
