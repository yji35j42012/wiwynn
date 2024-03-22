import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-e-process-detail',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './e-process-detail.component.html',
	styleUrl: './e-process-detail.component.scss'
})
export class EProcessDetailComponent {
	model_checkbox = {
		isShow: true,
		lists: [
			{ id: 0, isChecked: false, name: 'YV3.5 MP VF2.0 HSC MAXIM EFUSE T1' },
			{ id: 1, isChecked: false, name: 'YV4.5 MP VF2.0 HSC MAXIM' },
			{ id: 2, isChecked: false, name: 'YV3.5 MP VF2.0 HSC MAXIM EFUSE T1' },
			{ id: 3, isChecked: false, name: 'YV4.5 MP VF2.0' },
			{ id: 4, isChecked: false, name: 'YV3.5 MP VF2.0 HSC' },
			{ id: 5, isChecked: false, name: 'YV4.5 MP VF2.0 HSC MAXIM' },
			{ id: 6, isChecked: false, name: 'YV3.5 MP VF2.0 HSC MAXIM EFUSE T1' },
			{ id: 7, isChecked: false, name: 'YV4.5 12345' },
			{ id: 8, isChecked: false, name: 'YV3.5 MP VF2.0 HSC MAXIM EFUSE T1' },
			{ id: 9, isChecked: false, name: 'YV3.5 MP VF2.0 HSC MAXIM EFUSE T1' },
			{ id: 10, isChecked: false, name: 'YV4.5 MP VF2.0 HSC MAXIM' },
			{ id: 11, isChecked: false, name: 'YV3.5 MP VF2.0 HSC MAXIM EFUSE T1' },
			{ id: 12, isChecked: false, name: 'YV4.5 MP VF2.0 HSC MAXIM' },
		]
	}

	stuff_checkbox = {
		isShow: false,
		lists: [
			{ id: 0, isChecked: false, name: 'YV3.5 MP VF2.0 HSC MAXIM EFUSE T1' },
			{ id: 1, isChecked: false, name: 'YV4.5 MP VF2.0 HSC MAXIM' },
			{ id: 2, isChecked: false, name: 'YV3.5 MP VF2.0 HSC MAXIM EFUSE T1' },
			{ id: 3, isChecked: false, name: 'YV4.5 MP VF2.0' },
			{ id: 4, isChecked: false, name: 'YV3.5 MP VF2.0 HSC' },
			{ id: 5, isChecked: false, name: 'YV4.5 MP VF2.0 HSC MAXIM' },
			{ id: 6, isChecked: false, name: 'YV3.5 MP VF2.0 HSC MAXIM EFUSE T1' },
			{ id: 7, isChecked: false, name: 'YV4.5 12345' },
			{ id: 8, isChecked: false, name: 'YV3.5 MP VF2.0 HSC MAXIM EFUSE T1' },
			{ id: 9, isChecked: false, name: 'YV3.5 MP VF2.0 HSC MAXIM EFUSE T1' },
			{ id: 10, isChecked: false, name: 'YV4.5 MP VF2.0 HSC MAXIM' },
			{ id: 11, isChecked: false, name: 'YV3.5 MP VF2.0 HSC MAXIM EFUSE T1' },
			{ id: 12, isChecked: false, name: 'YV4.5 MP VF2.0 HSC MAXIM' },

		]
	}

	showMore(n: number) {
		if (n == 0) {
			this.model_checkbox.isShow = !this.model_checkbox.isShow
		} else if (n == 1) {
			this.stuff_checkbox.isShow = !this.stuff_checkbox.isShow
		}
	}


	model_filter = {
		isShow: false,
	};
	modelFilter() {
		this.model_filter.isShow = !this.model_filter.isShow
	}
	stuff_fitler = {
		isShow: false,
	};
	stuffFilter() {
		this.stuff_fitler.isShow = !this.stuff_fitler.isShow
	}
	stuffh_fitler = {
		isShow: false,
	};
	stuffhFilter() {
		this.stuffh_fitler.isShow = !this.stuffh_fitler.isShow
	}
	mo_fitler = {
		isShow: false,
	};
	moFilter() {
		this.mo_fitler.isShow = !this.mo_fitler.isShow
	}
	sn_fitler = {
		isShow: false,
	};
	snFilter() {
		this.sn_fitler.isShow = !this.sn_fitler.isShow
	}
}
