import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelSelectComponent } from '../model-select/model-select.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
	selector: 'app-option-maintain',
	standalone: true,
	imports: [CommonModule, ModelSelectComponent, FormsModule],
	templateUrl: './option-maintain.component.html',
	styleUrl: './option-maintain.component.scss',
})
export class OptionMaintainComponent {
	// 狀態代碼過濾
	filter_maintain = {
		isShow: false,
		lists: [
			{ id: 0, isChecked: false, name: 'Select All' },
			{ id: 1, isChecked: false, name: 'EQ_WAIT' },
			{ id: 2, isChecked: false, name: 'PM' },
			{ id: 3, isChecked: false, name: 'PD_RUN' },
			{ id: 4, isChecked: false, name: 'ENG' },
			{ id: 5, isChecked: false, name: 'OFF' },
		],
		filterLists: [] as any[],
		searchTerm: '',
	};
	filterMatintain () {
		this.filter_maintain.isShow = !this.filter_maintain.isShow;
		this.filter_color.isShow = false;
	}

	searchMaintain () {
		this.filter_maintain.filterLists = this.filter_maintain.lists.filter(
			(item) =>
				item.name
					.toLowerCase()
					.includes(this.filter_maintain.searchTerm.toLowerCase())
		);
	}

	filter_color = {
		isShow: false,
		lists: [
			{ id: 0, isChecked: false, name: 'WAIT' },
			{ id: 1, isChecked: false, name: 'PM' },
			{ id: 2, isChecked: false, name: 'PD_RUN' },
			{ id: 3, isChecked: false, name: 'ENG' },
			{ id: 4, isChecked: false, name: 'OFF' },
			{ id: 5, isChecked: false, name: 'PR_RUN' },
		],
		isAll: false,
	};
	filterColor () {
		this.filter_color.isShow = !this.filter_color.isShow;
		this.filter_maintain.isShow = false;
	}
	colorAll (b: boolean) {
		for (let i = 0; i < this.filter_color.lists.length; i++) {
			const element = this.filter_color.lists[i];
			element.isChecked = b;
		}
	}
	colorChange (b: boolean) {
		if (this.filter_color.isAll && !b) {
			this.filter_color.isAll = false;
		}
	}

	type_selete = {
		name: 'type_selete',
		title: 'Loss',
		lists: ['Normal', 'Loss', 'Charge'],
		isShow: false,
		msg: 'Type',
	};
	selShow (s: string) {
		this.multsearch.isShow = false;
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
		isShow: false,
	};

	delAlert = {
		isShow: false,
	};
	multsearch = {
		isShow: false,
		lists: [
			{ id: 0, isChecked: false, name: 'Darren_KC_Huang@wiwynn.com' },
			{ id: 1, isChecked: false, name: 'Vencent_Su@wiwynn.com' },
			{ id: 2, isChecked: false, name: 'jackson.graham@example.com' },
			{ id: 3, isChecked: false, name: 'kenzi.lawson@example.com' },
			{ id: 4, isChecked: false, name: 'Jenny Wilson' },
			{ id: 5, isChecked: false, name: 'curtis.weaver@example.com' },
		],
		filterLists: [] as any[],
		searchTerm: '',
		showLists: [] as { id: number; isChecked: boolean; name: string }[],
	};
	searchMail () {
		this.multsearch.filterLists = this.multsearch.lists.filter((item) =>
			item.name.toLowerCase().includes(this.multsearch.searchTerm.toLowerCase())
		);
	}

	editHandler (s: string) {
		this.editAlert.state = s;
		this.editAlert.isShow = true;
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
	multsearchHandler () {
		this.type_selete.isShow = false;
		this.multsearch.isShow = !this.multsearch.isShow;
	}
	inpHandler (e: Event) {
		e.stopPropagation();
	}
	delHandler () {
		this.delAlert.isShow = true;
	}
	alert_close (s: string) {
		switch (s) {
			case 'editAlert':
				this.editAlert.isShow = false;
				break;

			case 'delAlert':
				this.delAlert.isShow = false;
				break;
			default:
				break;
		}
	}

	ngOnInit (): void {
		this.filter_maintain.filterLists = this.filter_maintain.lists;
		this.multsearch.filterLists = this.multsearch.lists;
	}

	checkChange (s: string, i: number) {
		var item: any;
		if (s == 'maintain') {
			item = this.filter_maintain.lists;
		}
		if (i == 0) {
			if (item[0].isChecked) {
				for (let i = 0; i < item.length; i++) {
					const element = item[i];
					element.isChecked = true;
				}
			} else {
				for (let i = 0; i < item.length; i++) {
					const element = item[i];
					element.isChecked = false;
				}
			}
			return;
		} else if (i !== 0) {
			if (item[0].isChecked && !item[i].isChecked) {
				item[0].isChecked = item[i].isChecked;
			}
		}
	}

	isHostListener: Boolean = false;
	mouseevent (b: Boolean) {
		this.isHostListener = b;
	}
	@HostListener('document:click', ['$event'])
	onClick (event: MouseEvent) {
		if (this.isHostListener) return;

		if (this.filter_maintain.isShow) {
			this.filter_maintain.isShow = false;
		}
		if (this.filter_color.isShow) {
			this.filter_color.isShow = false;
		}
		if (this.type_selete.isShow) {
			this.type_selete.isShow = false;
		}
		if (this.multsearch.isShow) {
			this.multsearch.isShow = false;
		}
	}
}
