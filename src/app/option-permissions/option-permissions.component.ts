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
		title: "MA100",
		lists: ['MA100', 'MA101']
	}
	office_sel = {
		title: "Engineer",
		lists: ['Engineer1', 'Engineer2']
	}
	permissions_sel = {
		title: "Admin",
		lists: ['user1', 'user2']
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
