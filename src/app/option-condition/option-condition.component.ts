import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelSelectComponent } from '../model-select/model-select.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
	selector: 'app-option-condition',
	standalone: true,
	imports: [CommonModule, ModelSelectComponent, FormsModule],
	templateUrl: './option-condition.component.html',
	styleUrl: './option-condition.component.scss',
})
export class OptionConditionComponent {
	line_sel = {
		name: 'line_sel',
		title: 's1',
		lists: ['s1', 's2', 's3', 's4', 's5', 's6'],
		isShow: false,
		msg: '線別',
	};
	state_sel = {
		name: 'state_sel',
		title: 'Normal',
		lists: ['Normal', 'Charge'],
		isShow: false,
		msg: '新狀態',
	};
	selShow (s: string) {
		this.filter_color.isShow = false;
		this.filter_device.isShow = false;

		if (s == 'line_sel') {
			this.line_sel.isShow = !this.line_sel.isShow;
			this.state_sel.isShow = false;
		} else if (s == 'state_sel') {
			this.state_sel.isShow = !this.state_sel.isShow;
			this.line_sel.isShow = false;
		}
	}
	selHandler (s: any) {
		if (s.name == 'line_sel') {
			this.line_sel.title = s.title;
			this.line_sel.isShow = false;
		} else if (s.name == 'state_sel') {
			this.state_sel.title = s.title;
			this.state_sel.isShow = false;
		}
	}
	filter_device = {
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
	filterDevice () {
		this.line_sel.isShow = false;
		this.filter_color.isShow = false;
		this.filter_device.isShow = !this.filter_device.isShow;
	}

	searchDevice () {
		this.filter_device.filterLists = this.filter_device.lists.filter((item) =>
			item.name
				.toLowerCase()
				.includes(this.filter_device.searchTerm.toLowerCase())
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
		this.line_sel.isShow = false;
		this.filter_device.isShow = false;
		this.filter_color.isShow = !this.filter_color.isShow;
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
	filter_num = {
		isShow: false,
	};

	filterNum () {
		this.filter_num.isShow = !this.filter_num.isShow;
	}
	filter_category = {
		isShow: false,
	};
	filterCategory () {
		this.filter_category.isShow = !this.filter_category.isShow;
	}
	filter_place = {
		isShow: false,
	};
	filtePlace () {
		this.filter_place.isShow = !this.filter_place.isShow;
	}
	filter_model = {
		isShow: false,
	};
	filteModel () {
		this.filter_model.isShow = !this.filter_model.isShow;
	}
	filter_process = {
		isShow: false,
	};
	filteProcess () {
		this.filter_process.isShow = !this.filter_process.isShow;
	}
	filter_vendor = {
		isShow: false,
	};
	filteVendor () {
		this.filter_vendor.isShow = !this.filter_vendor.isShow;
	}
	filter_dept = {
		isShow: false,
	};
	filteDept () {
		this.filter_dept.isShow = !this.filter_dept.isShow;
	}
	filter_factory = {
		isShow: false,
	};
	filteFactory () {
		this.filter_factory.isShow = !this.filter_factory.isShow;
	}
	filter_name = {
		isShow: false,
	};
	filteName () {
		this.filter_name.isShow = !this.filter_name.isShow;
	}
	edit_alert = {
		state: '',
		isShow: false,
	};
	editAlert (s: string) {
		this.edit_alert.state = s;
		this.edit_alert.isShow = true;
	}
	alert_close (s: string) {
		this.edit_alert.isShow = false;
	}

	ngOnInit (): void {
		this.filter_device.filterLists = this.filter_device.lists;
	}
	checkChange (s: string, i: number) {
		var item: any;
		if (s == 'device') {
			item = this.filter_device.lists;
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
		if (this.line_sel.isShow) {
			this.line_sel.isShow = false;
		}
		if (this.filter_color.isShow) {
			this.filter_color.isShow = false;
		}
		if (this.filter_device.isShow) {
			this.filter_device.isShow = false;
		}
		if (this.state_sel.isShow) {
			this.state_sel.isShow = false;
		}
	}
}
