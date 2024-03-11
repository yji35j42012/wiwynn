import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelSelcheckComponent } from '../model-selcheck/model-selcheck.component';
import { AlertDelmsgComponent } from '../alert-delmsg/alert-delmsg.component';
@Component({
	selector: 'app-option-device',
	standalone: true,
	imports: [CommonModule, ModelSelcheckComponent, AlertDelmsgComponent],
	templateUrl: './option-device.component.html',
	styleUrl: './option-device.component.scss',
})
export class OptionDeviceComponent {
	filter_device = {
		isShow: false,
	};
	filterDevice() {
		this.filter_device.isShow = !this.filter_device.isShow;
	}
	filter_valid = {
		isShow: false,
	};
	filterValid() {
		this.filter_valid.isShow = !this.filter_valid.isShow;
	}
	filter_num = {
		isShow: false,
	};
	filterNum() {
		this.filter_num.isShow = !this.filter_num.isShow;
	}
	filter_category = {
		isShow: false,
	};
	filterCategory() {
		this.filter_category.isShow = !this.filter_category.isShow;
	}
	filter_place = {
		isShow: false,
	};
	filterPlace() {
		this.filter_place.isShow = !this.filter_place.isShow;
	}
	filter_model = {
		isShow: false,
	};
	filterModel() {
		this.filter_model.isShow = !this.filter_model.isShow;
	}
	filter_process = {
		isShow: false,
	};
	filterProcess() {
		this.filter_process.isShow = !this.filter_process.isShow;
	}
	filter_vendor = {
		isShow: false,
	};
	filterVendor() {
		this.filter_vendor.isShow = !this.filter_vendor.isShow;
	}
	filter_dept = {
		isShow: false,
	};
	filterDept() {
		this.filter_dept.isShow = !this.filter_dept.isShow;
	}
	filter_factory = {
		isShow: false,
	};
	filterFactory() {
		this.filter_factory.isShow = !this.filter_factory.isShow;
	}
	filter_name = {
		isShow: false,
	};
	filterName() {
		this.filter_name.isShow = !this.filter_name.isShow;
	}

	editAlert = {
		state: '',
		isShow: false,
	};
	edit_alert(s: string) {
		this.editAlert.state = s;
		this.editAlert.isShow = true;
	}

	alert_close(s: string) {
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
	ngOnInit(): void {
		this.stations_sel.lists.forEach((item) => {
			if (item.isChecked) {
				this.stations_sel.showLists.push(item);
			}
		});
	}
	selCheckShow(s: any) {
		if (s == 'stations_sel') {
			this.stations_sel.isShow = !this.stations_sel.isShow;
		}
	}
	selCheckHandler(obj: any) {
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
	delAlert() {
		this.alertMsg.show = true;
		this.alertMsg.title = '刪除設備';
		this.alertMsg.msg = '您確定要刪除此設備？';
		this.alertMsg.str = 'delMsg';
	}
	alert_del(e: any) { }
}
