import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule, Router, NavigationEnd } from '@angular/router';
import { OptionSelectComponent } from '../option-select/option-select.component';

@Component({
	selector: 'app-option',
	standalone: true,
	imports: [RouterOutlet, RouterModule, CommonModule, OptionSelectComponent,],
	templateUrl: './option.component.html',
	styleUrl: './option.component.scss'
})



export class OptionComponent {
	constructor(private router: Router) { }
	optionPage = ''
	pageBtn = ''
	permissions_sel = {
		title: "permissions",
		now: "權限設定",
		lists: [
			{ page: 'permissions', name: '權限設定' },
			{ page: 'pageset', name: '頁面設定' },
			{ page: 'roleset', name: '角色設定' },
		],
		show: false,
		txt: "權限設定",
		on: true,
		width: '115px'
	}
	maintain_sel = {
		title: "maintain",
		now: "機台/狀態註冊",
		lists: [
			{ page: 'maintain', name: '狀態維護' },
			{ page: 'machine', name: '機況維護' },
			{ page: 'device', name: '變更設備' },
			{ page: 'linefix', name: '線別維護' },
		],
		show: false,
		txt: "",
		on: false,
		width: '150px'
	}
	kpi_sel = {
		title: "kpi",
		now: "KPI指標",
		lists: [
			{ page: 'kpitarget', name: 'KPI算法Target' },
			{ page: 'kpicreaet', name: 'KPI指標建立' },
		],
		show: false,
		txt: "",
		on: false,
		width: '150px'
	}


	option_page(obj: any) {
		if(obj.page=='permissions'){
			this.router.navigate(['/home/Option/']);
		}else{
			this.router.navigate(['/home/Option/' + obj.page]);
		}
		
		if (obj.title == 'permissions') {
			this.permissions_sel.on = true
			this.maintain_sel.on = false
			this.kpi_sel.on = false
			this.pageBtn = ''
		} else if (obj.title == 'maintain') {
			this.permissions_sel.on = false
			this.maintain_sel.on = true
			this.kpi_sel.on = false
			this.pageBtn = ''
		} else if (obj.title == 'kpi') {
			this.permissions_sel.on = false
			this.maintain_sel.on = false
			this.kpi_sel.on = true
			this.pageBtn = ''
		} else {
			this.permissions_sel.on = false
			this.maintain_sel.on = false
			this.kpi_sel.on = false
			this.pageBtn = obj.title
		}
		// this.optionPage = s
	}

	alert_close(s: string) {

	}
}
