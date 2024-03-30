import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelSelectComponent } from '../model-select/model-select.component';

@Component({
	selector: 'app-option-permissions',
	standalone: true,
	imports: [CommonModule, ModelSelectComponent],
	templateUrl: './option-permissions.component.html',
	styleUrl: './option-permissions.component.scss'
})
export class OptionPermissionsComponent {

	editShow = false
	editData = {
		isAdd: false,
		name: '',
		num: '',
		mail: '',
	}
	department_sel = {
		name: 'department_sel',
		title: "MA100",
		lists: ['MA100', 'MA101'],
		msg: '部門',
		isShow: false,
	}
	office_sel = {
		name: 'office_sel',
		title: "Engineer",
		lists: ['Engineer1', 'Engineer2'],
		msg: '職位',
		isShow: false,
	}
	permissions_sel = {
		name: 'permissions_sel',
		title: "Admin",
		lists: ['user1', 'user2'],
		isShow: false,
		msg: '權限',
	}

	number_sel = {
		name: 'number_sel',
		title: "11106637",
		lists: ['11106637', '11106638'],
		msg: '工號',
		isShow: false,
	}
	position_sel = {
		name: 'position_sel',
		title: "Engineer",
		lists: ['Admin', 'Engineer'],
		msg: '職位',
		isShow: false,
	}
	selShow(s: string) {
		if (s == 'department_sel') {
			this.department_sel.isShow = !this.department_sel.isShow;
			this.office_sel.isShow = false;
			this.permissions_sel.isShow = false;
			this.number_sel.isShow = false;
			this.position_sel.isShow = false;
		} else if (s == 'office_sel') {
			this.office_sel.isShow = !this.office_sel.isShow;
			this.department_sel.isShow = false;
			this.permissions_sel.isShow = false;
			this.number_sel.isShow = false;
			this.position_sel.isShow = false;
		} else if (s == 'permissions_sel') {
			this.permissions_sel.isShow = !this.permissions_sel.isShow;
			this.department_sel.isShow = false;
			this.office_sel.isShow = false;
			this.number_sel.isShow = false;
			this.position_sel.isShow = false;
		} else if (s == 'number_sel') {
			this.number_sel.isShow = !this.number_sel.isShow;
			this.department_sel.isShow = false;
			this.office_sel.isShow = false;
			this.permissions_sel.isShow = false;
			this.position_sel.isShow = false;
		} else if (s == 'position_sel') {
			this.position_sel.isShow = !this.position_sel.isShow;
			this.department_sel.isShow = false;
			this.office_sel.isShow = false;
			this.permissions_sel.isShow = false;
			this.number_sel.isShow = false;
		}
	}
	selHandler(s: any) {
		if (s.name == 'department_sel') {
			this.department_sel.title = s.title;
			this.department_sel.isShow = false;
		} else if (s.name == 'office_sel') {
			this.office_sel.title = s.title;
			this.office_sel.isShow = false;
		} else if (s.name == 'permissions_sel') {
			this.permissions_sel.title = s.title;
			this.permissions_sel.isShow = false;
		} else if (s.name == 'number_sel') {
			this.number_sel.title = s.title;
			this.number_sel.isShow = false;
		} else if (s.name == 'position_sel') {
			this.position_sel.title = s.title;
			this.position_sel.isShow = false;
		}
	}




	permissions_edit(s: string) {
		if (s == 'edit') {
			this.editData.isAdd = false
			this.editData.name = 'Cameron Williamson'
			this.editData.num = '11106637'
			this.editData.mail = 'williamson_chen_12234567892223wiwynn.com.tw'
		} else if (s == 'add') {
			this.editData.isAdd = true
			this.editData.name = ''
			this.editData.num = ''
			this.editData.mail = ''
		}
		this.editShow = true

	}
	alert_close() {
		this.editShow = false
	}
}
