import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
	selector: 'app-e-process-detail',
	standalone: true,
	imports: [CommonModule, FormsModule],
	templateUrl: './e-process-detail.component.html',
	styleUrl: './e-process-detail.component.scss'
})

export class EProcessDetailComponent {
	model_checkbox = {
		isShow: true,
		lists: [
			{ id: 0, isChecked: false, name: 'Select All' },
			{ id: 1, isChecked: false, name: 'YV3.5 MP VF2.0 HSC MAXIM EFUSE T1' },
			{ id: 2, isChecked: false, name: 'YV4.5 MP VF2.0 HSC MAXIM' },
			{ id: 3, isChecked: false, name: 'YV3.5 MP VF2.0 HSC MAXIM EFUSE T1' },
			{ id: 4, isChecked: false, name: 'YV4.5 MP VF2.0' },
			{ id: 5, isChecked: false, name: 'YV3.5 MP VF2.0 HSC' },
			{ id: 6, isChecked: false, name: 'YV4.5 MP VF2.0 HSC MAXIM' },
			{ id: 7, isChecked: false, name: 'YV3.5 MP VF2.0 HSC MAXIM EFUSE T1' },
			{ id: 8, isChecked: false, name: 'YV4.5 12345' },
			{ id: 9, isChecked: false, name: 'YV3.5 MP VF2.0 HSC MAXIM EFUSE T1' },
			{ id: 10, isChecked: false, name: 'YV3.5 MP VF2.0 HSC MAXIM EFUSE T1' },
			{ id: 11, isChecked: false, name: 'YV4.5 MP VF2.0 HSC MAXIM' },
			{ id: 12, isChecked: false, name: 'YV3.5 MP VF2.0 HSC MAXIM EFUSE T1' },
			{ id: 13, isChecked: false, name: 'YV4.5 MP VF2.0 HSC MAXIM' },
		]
	}
	stuff_checkbox = {
		isShow: false,
		lists: [
			{ id: 0, isChecked: false, name: 'Select All' },
			{ id: 1, isChecked: false, name: 'YV3.5 MP VF2.0 HSC MAXIM EFUSE T1' },
			{ id: 2, isChecked: false, name: 'YV4.5 MP VF2.0 HSC MAXIM' },
			{ id: 3, isChecked: false, name: 'YV3.5 MP VF2.0 HSC MAXIM EFUSE T1' },
			{ id: 4, isChecked: false, name: 'YV4.5 MP VF2.0' },
			{ id: 5, isChecked: false, name: 'YV3.5 MP VF2.0 HSC' },
			{ id: 6, isChecked: false, name: 'YV4.5 MP VF2.0 HSC MAXIM' },
			{ id: 7, isChecked: false, name: 'YV3.5 MP VF2.0 HSC MAXIM EFUSE T1' },
			{ id: 8, isChecked: false, name: 'YV4.5 12345' },
			{ id: 9, isChecked: false, name: 'YV3.5 MP VF2.0 HSC MAXIM EFUSE T1' },
			{ id: 10, isChecked: false, name: 'YV3.5 MP VF2.0 HSC MAXIM EFUSE T1' },
			{ id: 11, isChecked: false, name: 'YV4.5 MP VF2.0 HSC MAXIM' },
			{ id: 12, isChecked: false, name: 'YV3.5 MP VF2.0 HSC MAXIM EFUSE T1' },
			{ id: 13, isChecked: false, name: 'YV4.5 MP VF2.0 HSC MAXIM' },

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
		lists: [
			{ id: 0, isChecked: false, name: "Select All" },
			{ id: 1, isChecked: false, name: "EQ_WAIT" },
			{ id: 2, isChecked: false, name: "PM" },
			{ id: 3, isChecked: false, name: "PD_RUN" },
			{ id: 4, isChecked: false, name: "ENG" },
			{ id: 5, isChecked: false, name: "OFF" },
		],
		filterLists: [] as any[],
		searchTerm: ''
	};
	modelFilter(event: MouseEvent) {
		event.stopPropagation();
		this.model_filter.isShow = !this.model_filter.isShow
		if (this.stuff_fitler.isShow) {
			this.stuff_fitler.isShow = false
		}
		if (this.stuffh_fitler.isShow) {
			this.stuffh_fitler.isShow = false
		}
		if (this.mo_fitler.isShow) {
			this.mo_fitler.isShow = false
		}
		if (this.sn_fitler.isShow) {
			this.sn_fitler.isShow = false
		}
	}
	searchModel() {
		this.model_filter.filterLists = this.model_filter.lists.filter(item => item.name.toLowerCase().includes(this.model_filter.searchTerm.toLowerCase()));
	}
	stuff_fitler = {
		isShow: false,
		lists: [
			{ id: 0, isChecked: false, name: "Select All" },
			{ id: 1, isChecked: false, name: "EQ_WAIT" },
			{ id: 2, isChecked: false, name: "PM" },
			{ id: 3, isChecked: false, name: "PD_RUN" },
			{ id: 4, isChecked: false, name: "ENG" },
			{ id: 5, isChecked: false, name: "OFF" },
		],
		filterLists: [] as any[],
		searchTerm: ''
	};
	stuffFilter(event: MouseEvent) {
		event.stopPropagation();
		this.stuff_fitler.isShow = !this.stuff_fitler.isShow
		if (this.model_filter.isShow) {
			this.model_filter.isShow = false
		}
		if (this.stuffh_fitler.isShow) {
			this.stuffh_fitler.isShow = false
		}
		if (this.mo_fitler.isShow) {
			this.mo_fitler.isShow = false
		}
		if (this.sn_fitler.isShow) {
			this.sn_fitler.isShow = false
		}
	}

	searchStuff() {
		this.stuff_fitler.filterLists = this.stuff_fitler.lists.filter(item => item.name.toLowerCase().includes(this.stuff_fitler.searchTerm.toLowerCase()));
	}
	stuffh_fitler = {
		isShow: false,
		lists: [
			{ id: 0, isChecked: false, name: "Select All" },
			{ id: 1, isChecked: false, name: "EQ_WAIT" },
			{ id: 2, isChecked: false, name: "PM" },
			{ id: 3, isChecked: false, name: "PD_RUN" },
			{ id: 4, isChecked: false, name: "ENG" },
			{ id: 5, isChecked: false, name: "OFF" },
		],
		filterLists: [] as any[],
		searchTerm: ''
	};
	stuffhFilter(event: MouseEvent) {
		event.stopPropagation();
		this.stuffh_fitler.isShow = !this.stuffh_fitler.isShow
		if (this.model_filter.isShow) {
			this.model_filter.isShow = false
		}
		if (this.stuff_fitler.isShow) {
			this.stuff_fitler.isShow = false
		}
		if (this.mo_fitler.isShow) {
			this.mo_fitler.isShow = false
		}
		if (this.sn_fitler.isShow) {
			this.sn_fitler.isShow = false
		}
	}
	searchStuffh() {
		this.stuffh_fitler.filterLists = this.stuffh_fitler.lists.filter(item => item.name.toLowerCase().includes(this.stuffh_fitler.searchTerm.toLowerCase()));
	}
	mo_fitler = {
		isShow: false,
		lists: [
			{ id: 0, isChecked: false, name: "Select All" },
			{ id: 1, isChecked: false, name: "EQ_WAIT" },
			{ id: 2, isChecked: false, name: "PM" },
			{ id: 3, isChecked: false, name: "PD_RUN" },
			{ id: 4, isChecked: false, name: "ENG" },
			{ id: 5, isChecked: false, name: "OFF" },
		],
		filterLists: [] as any[],
		searchTerm: ''
	};
	moFilter(event: MouseEvent) {
		event.stopPropagation();
		this.mo_fitler.isShow = !this.mo_fitler.isShow
		if (this.model_filter.isShow) {
			this.model_filter.isShow = false
		}
		if (this.stuff_fitler.isShow) {
			this.stuff_fitler.isShow = false
		}
		if (this.stuffh_fitler.isShow) {
			this.stuffh_fitler.isShow = false
		}
		if (this.sn_fitler.isShow) {
			this.sn_fitler.isShow = false
		}
	}
	searchMo() {
		this.mo_fitler.filterLists = this.mo_fitler.lists.filter(item => item.name.toLowerCase().includes(this.mo_fitler.searchTerm.toLowerCase()));
	}
	sn_fitler = {
		isShow: false,
		lists: [
			{ id: 0, isChecked: false, name: "Select All" },
			{ id: 1, isChecked: false, name: "EQ_WAIT" },
			{ id: 2, isChecked: false, name: "PM" },
			{ id: 3, isChecked: false, name: "PD_RUN" },
			{ id: 4, isChecked: false, name: "ENG" },
			{ id: 5, isChecked: false, name: "OFF" },
		],
		filterLists: [] as any[],
		searchTerm: ''
	};
	snFilter(event: MouseEvent) {
		event.stopPropagation();
		this.sn_fitler.isShow = !this.sn_fitler.isShow
		if (this.model_filter.isShow) {
			this.model_filter.isShow = false
		}
		if (this.stuff_fitler.isShow) {
			this.stuff_fitler.isShow = false
		}
		if (this.stuffh_fitler.isShow) {
			this.stuffh_fitler.isShow = false
		}
		if (this.mo_fitler.isShow) {
			this.mo_fitler.isShow = false
		}
	}
	searchSn() {
		this.sn_fitler.filterLists = this.sn_fitler.lists.filter(item => item.name.toLowerCase().includes(this.sn_fitler.searchTerm.toLowerCase()));
	}
	ngOnInit(): void {
		this.model_filter.filterLists = this.model_filter.lists
		this.stuff_fitler.filterLists = this.stuff_fitler.lists
		this.stuffh_fitler.filterLists = this.stuffh_fitler.lists
		this.mo_fitler.filterLists = this.mo_fitler.lists
		this.sn_fitler.filterLists = this.sn_fitler.lists
	}
	checkChange(s: string, i: number) {
		if (i !== 0) return
		var item: any
		if (s == 'model') {
			item = this.model_filter.lists
		} else if (s == 'stuff') {
			item = this.stuff_fitler.lists
		} else if (s == 'stuffh') {
			item = this.stuffh_fitler.lists
		} else if (s == 'mo') {
			item = this.mo_fitler.lists
		} else if (s == 'sn') {
			item = this.sn_fitler.lists
		} else if (s == 'em') {
			item = this.model_checkbox.lists
		} else if (s == 'es') {
			item = this.stuff_checkbox.lists
		}
		if (item[0].isChecked) {
			for (let i = 0; i < item.length; i++) {
				const element = item[i];
				element.isChecked = true
			}
		} else {
			for (let i = 0; i < item.length; i++) {
				const element = item[i];
				element.isChecked = false
			}
		}
	}

	@HostListener('document:click', ['$event'])
	onClick(event: MouseEvent) {
		if (this.model_filter.isShow) {
			this.model_filter.isShow = false
		}
		if (this.stuff_fitler.isShow) {
			this.stuff_fitler.isShow = false
		}
		if (this.stuffh_fitler.isShow) {
			this.stuffh_fitler.isShow = false
		}
		if (this.mo_fitler.isShow) {
			this.mo_fitler.isShow = false
		}
		if (this.sn_fitler.isShow) {
			this.sn_fitler.isShow = false
		}
	}
}
