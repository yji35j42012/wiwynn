import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelSelcheckComponent } from '../model-selcheck/model-selcheck.component';
import { AlertDelmsgComponent } from '../alert-delmsg/alert-delmsg.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
	selector: 'app-option-device',
	standalone: true,
	imports: [
		CommonModule,
		ModelSelcheckComponent,
		AlertDelmsgComponent,
		FormsModule,
	],
	templateUrl: './option-device.component.html',
	styleUrl: './option-device.component.scss',
})
export class OptionDeviceComponent {
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
		this.filter_valid.isShow = false;
		this.filter_num.isShow = false;
		this.filter_category.isShow = false;
		this.filter_place.isShow = false;
		this.filter_model.isShow = false;
		this.filter_process.isShow = false;
		this.filter_vendor.isShow = false;
		this.filter_dept.isShow = false;
		this.filter_factory.isShow = false;
		this.filter_name.isShow = false;
		this.filter_device.isShow = !this.filter_device.isShow;
	}
	searchDevice () {
		this.filter_device.filterLists = this.filter_device.lists.filter((item) =>
			item.name
				.toLowerCase()
				.includes(this.filter_device.searchTerm.toLowerCase())
		);
	}

	filter_valid = {
		isShow: false,
		lists: [
			{ id: 0, isChecked: false, name: '_check' },
			{ id: 1, isChecked: false, name: '_invalid' },
		],
		isAll: false,
	};
	filterValid () {
		this.filter_device.isShow = false;
		this.filter_num.isShow = false;
		this.filter_category.isShow = false;
		this.filter_place.isShow = false;
		this.filter_model.isShow = false;
		this.filter_process.isShow = false;
		this.filter_vendor.isShow = false;
		this.filter_dept.isShow = false;
		this.filter_factory.isShow = false;
		this.filter_name.isShow = false;
		this.filter_valid.isShow = !this.filter_valid.isShow;
	}
	validAll () {
		for (let i = 0; i < this.filter_valid.lists.length; i++) {
			this.filter_valid.lists[i].isChecked = this.filter_valid.isAll;
		}
	}
	validChange (b: boolean) {
		if (this.filter_valid.isAll && !b) {
			this.filter_valid.isAll = false;
		}
	}
	filter_num = {
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
	filterNum () {
		this.filter_device.isShow = false;
		this.filter_valid.isShow = false;
		this.filter_category.isShow = false;
		this.filter_place.isShow = false;
		this.filter_model.isShow = false;
		this.filter_process.isShow = false;
		this.filter_vendor.isShow = false;
		this.filter_dept.isShow = false;
		this.filter_factory.isShow = false;
		this.filter_name.isShow = false;
		this.filter_num.isShow = !this.filter_num.isShow;
	}
	searchNum () {
		this.filter_num.filterLists = this.filter_num.lists.filter((item) =>
			item.name.toLowerCase().includes(this.filter_num.searchTerm.toLowerCase())
		);
	}

	filter_category = {
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
	filterCategory () {
		this.filter_device.isShow = false;
		this.filter_valid.isShow = false;
		this.filter_num.isShow = false;
		this.filter_place.isShow = false;
		this.filter_model.isShow = false;
		this.filter_process.isShow = false;
		this.filter_vendor.isShow = false;
		this.filter_dept.isShow = false;
		this.filter_factory.isShow = false;
		this.filter_name.isShow = false;
		this.filter_category.isShow = !this.filter_category.isShow;
	}

	searchCategory () {
		this.filter_category.filterLists = this.filter_category.lists.filter(
			(item) =>
				item.name
					.toLowerCase()
					.includes(this.filter_category.searchTerm.toLowerCase())
		);
	}

	filter_place = {
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
	filterPlace () {
		this.filter_device.isShow = false;
		this.filter_valid.isShow = false;
		this.filter_num.isShow = false;
		this.filter_category.isShow = false;
		this.filter_model.isShow = false;
		this.filter_process.isShow = false;
		this.filter_vendor.isShow = false;
		this.filter_dept.isShow = false;
		this.filter_factory.isShow = false;
		this.filter_name.isShow = false;
		this.filter_place.isShow = !this.filter_place.isShow;
	}
	searchPlace () {
		this.filter_place.filterLists = this.filter_place.lists.filter((item) =>
			item.name
				.toLowerCase()
				.includes(this.filter_place.searchTerm.toLowerCase())
		);
	}

	filter_model = {
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
	filterModel () {
		this.filter_device.isShow = false;
		this.filter_valid.isShow = false;
		this.filter_num.isShow = false;
		this.filter_category.isShow = false;
		this.filter_place.isShow = false;
		this.filter_process.isShow = false;
		this.filter_vendor.isShow = false;
		this.filter_dept.isShow = false;
		this.filter_factory.isShow = false;
		this.filter_name.isShow = false;
		this.filter_model.isShow = !this.filter_model.isShow;
	}
	searchModel () {
		this.filter_model.filterLists = this.filter_model.lists.filter((item) =>
			item.name
				.toLowerCase()
				.includes(this.filter_model.searchTerm.toLowerCase())
		);
	}

	filter_process = {
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
	filterProcess () {
		this.filter_device.isShow = false;
		this.filter_valid.isShow = false;
		this.filter_num.isShow = false;
		this.filter_category.isShow = false;
		this.filter_place.isShow = false;
		this.filter_model.isShow = false;
		this.filter_vendor.isShow = false;
		this.filter_dept.isShow = false;
		this.filter_factory.isShow = false;
		this.filter_name.isShow = false;
		this.filter_process.isShow = !this.filter_process.isShow;
	}
	searchProcess () {
		this.filter_process.filterLists = this.filter_process.lists.filter((item) =>
			item.name
				.toLowerCase()
				.includes(this.filter_process.searchTerm.toLowerCase())
		);
	}

	filter_vendor = {
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
	filterVendor () {
		this.filter_device.isShow = false;
		this.filter_valid.isShow = false;
		this.filter_num.isShow = false;
		this.filter_category.isShow = false;
		this.filter_place.isShow = false;
		this.filter_model.isShow = false;
		this.filter_process.isShow = false;
		this.filter_dept.isShow = false;
		this.filter_factory.isShow = false;
		this.filter_name.isShow = false;
		this.filter_vendor.isShow = !this.filter_vendor.isShow;
	}
	searchVendor () {
		this.filter_vendor.filterLists = this.filter_vendor.lists.filter((item) =>
			item.name
				.toLowerCase()
				.includes(this.filter_vendor.searchTerm.toLowerCase())
		);
	}

	filter_dept = {
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
	filterDept () {
		this.filter_device.isShow = false;
		this.filter_valid.isShow = false;
		this.filter_num.isShow = false;
		this.filter_category.isShow = false;
		this.filter_place.isShow = false;
		this.filter_model.isShow = false;
		this.filter_process.isShow = false;
		this.filter_vendor.isShow = false;
		this.filter_factory.isShow = false;
		this.filter_name.isShow = false;
		this.filter_dept.isShow = !this.filter_dept.isShow;
	}
	searchDept () {
		this.filter_dept.filterLists = this.filter_dept.lists.filter((item) =>
			item.name
				.toLowerCase()
				.includes(this.filter_dept.searchTerm.toLowerCase())
		);
	}

	filter_factory = {
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
	filterFactory () {
		this.filter_device.isShow = false;
		this.filter_valid.isShow = false;
		this.filter_num.isShow = false;
		this.filter_category.isShow = false;
		this.filter_place.isShow = false;
		this.filter_model.isShow = false;
		this.filter_process.isShow = false;
		this.filter_vendor.isShow = false;
		this.filter_dept.isShow = false;
		this.filter_name.isShow = false;
		this.filter_factory.isShow = !this.filter_factory.isShow;
	}
	searchFactory () {
		this.filter_factory.filterLists = this.filter_factory.lists.filter((item) =>
			item.name
				.toLowerCase()
				.includes(this.filter_factory.searchTerm.toLowerCase())
		);
	}

	filter_name = {
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
	filterName () {
		this.filter_device.isShow = false;
		this.filter_valid.isShow = false;
		this.filter_num.isShow = false;
		this.filter_category.isShow = false;
		this.filter_place.isShow = false;
		this.filter_model.isShow = false;
		this.filter_process.isShow = false;
		this.filter_vendor.isShow = false;
		this.filter_dept.isShow = false;
		this.filter_factory.isShow = false;
		this.filter_name.isShow = !this.filter_name.isShow;
	}
	searchName () {
		this.filter_name.filterLists = this.filter_name.lists.filter((item) =>
			item.name
				.toLowerCase()
				.includes(this.filter_name.searchTerm.toLowerCase())
		);
	}

	editAlert = {
		state: '',
		isShow: false,
	};
	edit_alert (s: string) {
		this.editAlert.state = s;
		this.editAlert.isShow = true;
	}

	alert_close (s: string) {
		switch (s) {
			case 'editAlert':
				this.editAlert.isShow = false;
				break;
			case 'delmsg':
				this.alertMsg.show = false;
				break;
		}
	}
	stations_sel = {
		name: 'stations_sel',
		showLists: [] as { id: number; isChecked: boolean; name: string }[],
		lists: [
			{ id: 0, isChecked: true, name: 'PCB-IM' },
			{ id: 1, isChecked: false, name: 'PCB-IL' },
			{ id: 2, isChecked: false, name: 'PCB-IN' },
			{ id: 3, isChecked: false, name: 'PCB-IO' },
			{ id: 4, isChecked: false, name: 'PCB-IP' },
			{ id: 5, isChecked: false, name: 'PCB-IV' },
			{ id: 6, isChecked: false, name: 'PCB-IB' },
		],
		isShow: false,
		msg: 'stations',
	};

	selCheckShow (s: any) {
		if (s == 'stations_sel') {
			this.stations_sel.isShow = !this.stations_sel.isShow;
		}
	}
	selCheckHandler (obj: any) {
		if (this.stations_sel.lists[obj.id].isChecked) {
			this.stations_sel.lists[obj.id].isChecked = false;
			const rObj = this.stations_sel.showLists.findIndex(
				(item) => item.id === obj.id
			);
			this.stations_sel.showLists.splice(rObj, 1);
		} else {
			this.stations_sel.lists[obj.id].isChecked = true;
			this.stations_sel.showLists.push(this.stations_sel.lists[obj.id]);
		}
	}

	alertMsg = {
		show: false,
		title: '',
		msg: '',
		str: '',
	};
	delAlert () {
		this.alertMsg.show = true;
		this.alertMsg.title = '刪除設備';
		this.alertMsg.msg = '您確定要刪除此設備？';
		this.alertMsg.str = 'delMsg';
	}
	alert_del (e: any) { }

	ngOnInit (): void {
		this.stations_sel.lists.forEach((item) => {
			if (item.isChecked) {
				this.stations_sel.showLists.push(item);
			}
		});

		this.filter_device.filterLists = this.filter_device.lists;
		this.filter_num.filterLists = this.filter_num.lists;
		this.filter_category.filterLists = this.filter_category.lists;
		this.filter_place.filterLists = this.filter_place.lists;
		this.filter_model.filterLists = this.filter_model.lists;
		this.filter_process.filterLists = this.filter_process.lists;
		this.filter_vendor.filterLists = this.filter_vendor.lists;
		this.filter_dept.filterLists = this.filter_dept.lists;
		this.filter_factory.filterLists = this.filter_factory.lists;
		this.filter_name.filterLists = this.filter_name.lists;
	}

	checkChange (s: string, i: number) {
		var item: any;
		if (s == 'device') {
			item = this.filter_device.lists;
		} else if (s == 'num') {
			item = this.filter_num.lists;
		} else if (s == 'category') {
			item = this.filter_category.lists;
		} else if (s == 'place') {
			item = this.filter_place.lists;
		} else if (s == 'model') {
			item = this.filter_model.lists;
		} else if (s == 'process') {
			item = this.filter_process.lists;
		} else if (s == 'vendor') {
			item = this.filter_vendor.lists;
		} else if (s == 'dept') {
			item = this.filter_dept.lists;
		} else if (s == 'factory') {
			item = this.filter_factory.lists;
		} else if (s == 'name') {
			item = this.filter_name.lists;
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
		if (this.filter_device.isShow) {
			this.filter_device.isShow = false;
		}
		if (this.filter_valid.isShow) {
			this.filter_valid.isShow = false;
		}
		if (this.filter_num.isShow) {
			this.filter_num.isShow = false;
		}
		if (this.filter_category.isShow) {
			this.filter_category.isShow = false;
		}
		if (this.filter_place.isShow) {
			this.filter_place.isShow = false;
		}
		if (this.filter_model.isShow) {
			this.filter_model.isShow = false;
		}
		if (this.filter_process.isShow) {
			this.filter_process.isShow = false;
		}
		if (this.filter_vendor.isShow) {
			this.filter_vendor.isShow = false;
		}
		if (this.filter_dept.isShow) {
			this.filter_dept.isShow = false;
		}
		if (this.filter_factory.isShow) {
			this.filter_factory.isShow = false;
		}
		if (this.filter_name.isShow) {
			this.filter_name.isShow = false;
		}
		if (this.stations_sel.isShow) {
			this.stations_sel.isShow = false;
		}
	}
}
