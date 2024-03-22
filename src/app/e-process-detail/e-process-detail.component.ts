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
	model_filter = {
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

	stuff_filter = {
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
			this.model_filter.isShow = !this.model_filter.isShow
		} else if (n == 1) {
			this.stuff_filter.isShow = !this.stuff_filter.isShow
		}
	}


	model_device = {
		isShow: false,
	};
	modelDevice() {
		this.model_device.isShow = true
	}
}
