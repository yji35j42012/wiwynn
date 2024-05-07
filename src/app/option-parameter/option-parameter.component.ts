import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelSelectComponent } from '../model-select/model-select.component';
import { AlertDelmsgComponent } from '../alert-delmsg/alert-delmsg.component';
import { OptionSelectComponent } from '../option-select/option-select.component';

@Component({
	selector: 'app-option-parameter',
	standalone: true,
	imports: [
		CommonModule,
		ModelSelectComponent,
		AlertDelmsgComponent,
		OptionSelectComponent,
	],
	templateUrl: './option-parameter.component.html',
	styleUrl: './option-parameter.component.scss',
})
export class OptionParameterComponent {
	equipment_sel = {
		name: 'equipment_sel',
		title: 'Mounter',
		lists: ['Printer', 'Mounter', 'Reflow', 'POSTAOI', 'SPI', 'Router'],
		isShow: false,
		msg: '設備別',
	};
	model_sel = {
		name: 'model_sel',
		title: 'NPM-W2 NM-EJM7D',
		lists: [
			'NPM-W1 NM-EJM7D',
			'NPM-W2 NM-EJM7D',
			'NPM-W3 NM-EJM7D',
			'NPM-W4 NM-EJM7D',
			'NPM-W5 NM-EJM7D',
			'NPM-W6 NM-EJM7D',
		],
		isShow: false,
		msg: 'Model',
	};
	line_sel = {
		name: 'line_sel',
		title: 's1',
		lists: ['s1', 's2', 's3', 's4', 's5', 's6'],
		isShow: false,
		msg: 'Line',
	};
	line_clone_sel = {
		name: 'line_clone_sel',
		title: 's1',
		lists: ['s1', 's2', 's3', 's4', 's5', 's6'],
		isShow: false,
		msg: 'LineClone',
	};
	range_sel = {
		name: 'range_sel',
		title: '(>=,<=)',
		lists: ['>', '>=', '<', '<=', '(>,<)', '(>=,<=)', '<>'],
		isShow: false,
		msg: '範圍涵數',
	};
	selShow (s: string) {
		for (let i = 0; i < this.option_sel.length; i++) {
			this.option_sel[i].isShow = false;
		}
		if (s == 'equipment_sel') {
			this.equipment_sel.isShow = !this.equipment_sel.isShow;
			this.model_sel.isShow = false;
			this.line_sel.isShow = false;
			this.range_sel.isShow = false;
			this.line_clone_sel.isShow = false;
		} else if (s == 'model_sel') {
			this.model_sel.isShow = !this.model_sel.isShow;
			this.equipment_sel.isShow = false;
			this.line_sel.isShow = false;
			this.range_sel.isShow = false;
			this.line_clone_sel.isShow = false;
		} else if (s == 'line_sel') {
			this.line_sel.isShow = !this.line_sel.isShow;
			this.equipment_sel.isShow = false;
			this.model_sel.isShow = false;
			this.range_sel.isShow = false;
			this.line_clone_sel.isShow = false;
		} else if (s == 'range_sel') {
			this.range_sel.isShow = !this.range_sel.isShow;
			this.equipment_sel.isShow = false;
			this.model_sel.isShow = false;
			this.line_sel.isShow = false;
			this.line_clone_sel.isShow = false;
		} else if (s == 'line_clone_sel') {
			this.line_clone_sel.isShow = !this.line_clone_sel.isShow;
			this.equipment_sel.isShow = false;
			this.model_sel.isShow = false;
			this.line_sel.isShow = false;
			this.range_sel.isShow = false;
		}
	}
	selHandler (s: any) {
		for (let i = 0; i < this.option_sel.length; i++) {
			this.option_sel[i].isShow = false;
		}
		if (s.name == 'equipment_sel') {
			this.equipment_sel.title = s.title;
			this.equipment_sel.isShow = false;
		} else if (s.name == 'model_sel') {
			this.model_sel.title = s.title;
			this.model_sel.isShow = false;
		} else if (s.name == 'line_sel') {
			this.line_sel.title = s.title;
			this.line_sel.isShow = false;
		} else if (s.name == 'range_sel') {
			this.range_sel.title = s.title;
			this.range_sel.isShow = false;
		} else if (s.name == 'line_clone_sel') {
			this.line_clone_sel.title = s.title;
			this.line_clone_sel.isShow = false;
		}
	}

	parameter = {
		isShow: false,
		data: [] as { name: string; range: string; value: string; nuit: string }[],
	};

	option_sel = [
		{
			id: 0,
			type: 'sel',
			class: '_inside',
			name: 'permissions',
			title: 'Printer',
			txt: 'Printer1111',
			lists: [
				{ name: 'Printer1111' },
				{ name: 'Printer2222' },
				{ name: 'Printer3333' },
			],
			isOn: true,
			isShow: false,
			width: '110px',
		},
		{
			id: 1,
			type: 'sel',
			class: '_inside',
			name: 'Mounter',
			title: 'Mounter',
			txt: 'Printer1111',
			lists: [
				{ name: 'Printer' },
				{ name: 'Mounter' },
				{ name: 'Reflow' },
				{ name: 'POSTAOI' },
				{ name: 'SPI' },
				{ name: 'Router' },
			],
			isOn: false,
			isShow: false,
			width: '110px',
		},
	];

	queryHandler () {
		this.parameter.isShow = true;
		this.parameter.data = [
			{ name: '前刮刀壓力', range: '>', value: '12,15', nuit: 'kg' },
			{ name: '後刮刀壓力', range: '>=', value: '12,15', nuit: 'kg' },
			{ name: '向前印刷速度', range: '<', value: '12,15', nuit: 'kg' },
			{ name: '向後印刷速度', range: '<=', value: '12,15', nuit: 'kg' },
			{ name: '脫模速度', range: '(>,<)', value: '12,15', nuit: 'kg' },
			{ name: '脫模距離', range: '(>=,<=)', value: '12,15', nuit: 'kg' },
			{ name: '印刷空隙', range: '<>', value: '12,15', nuit: 'kg' },
		];
	}

	selShowHandler (s: number) {
		this.line_sel.isShow = false;
		this.line_clone_sel.isShow = false;
		this.range_sel.isShow = false;
		if (!this.option_sel[s].isShow) {
			for (let i = 0; i < this.option_sel.length; i++) {
				this.option_sel[i].isShow = false;
			}
			this.option_sel[s].isShow = true;
		} else {
			this.option_sel[s].isShow = false;
		}
	}

	option_page (obj: any) {
		for (let i = 0; i < this.option_sel.length; i++) {
			this.option_sel[i].isOn = false;
		}
		this.option_sel[obj.id].isOn = true;
		this.option_sel[obj.id].txt = obj.list.name;
		if (this.option_sel[obj.id].type == 'btn') {
			for (let i = 0; i < this.option_sel.length; i++) {
				this.option_sel[i].isShow = false;
			}
		}
	}

	clone = {
		isShow: false,
	};
	cloneAlert = {
		isShow: false,
	};
	cloneHandler () {
		this.clone.isShow = true;
	}
	cancelClone () {
		this.clone.isShow = false;
	}
	submitClone () {
		this.cloneAlert.isShow = true;
	}
	alert_close (s: string) {
		switch (s) {
			case 'cloneAlert':
				this.cloneAlert.isShow = false;
				break;
			case 'editAlert':
				this.edit_alert.isShow = false;
				break;
		}
	}
	edit_alert = {
		state: '',
		isShow: false,
	};
	editAlert (s: string) {
		this.edit_alert.state = s;
		this.edit_alert.isShow = true;
	}

	isHostListener: Boolean = false;
	mouseevent (b: Boolean) {
		this.isHostListener = b;
	}
	@HostListener('document:click', ['$event'])
	onClick (event: MouseEvent) {
		if (this.isHostListener) return;
		for (let i = 0; i < this.option_sel.length; i++) {
			this.option_sel[i].isShow = false;
		}
		if (this.line_sel.isShow) {
			this.line_sel.isShow = false;
		}
		if (this.line_clone_sel.isShow) {
			this.line_clone_sel.isShow = false;
		}
		if (this.range_sel.isShow) {
			this.range_sel.isShow = false;
		}
	}
}
