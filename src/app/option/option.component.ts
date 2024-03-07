import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { OptionSelectComponent } from '../option-select/option-select.component';

@Component({
  selector: 'app-option',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, OptionSelectComponent],
  templateUrl: './option.component.html',
  styleUrl: './option.component.scss',
})
export class OptionComponent {
  constructor(private router: Router) {}

  optionPage = '';
  option_sel = [
    {
      id: 0,
      type: 'sel',
      class: '',
      name: 'permissions',
      title: '權限設定',
      txt: '權限設定',
      lists: [
        { page: 'permissions', name: '權限設定' },
        { page: 'pageset', name: '頁面設定' },
        { page: 'roleset', name: '角色設定' },
      ],
      isOn: false,
      isShow: false,
      width: '115px',
    },
    {
      id: 1,
      type: 'sel',
      class: '',
      name: 'epkset',
      title: 'EPK 設定',
      txt: '',
      lists: [
        { page: 'recipe', name: 'Recipe Template' },
        { page: 'parameter', name: '參數設定' },
      ],
      isOn: false,
      width: '170px',
    },
    {
      id: 2,
      type: 'sel',
      class: '',
      name: 'maintain',
      title: '機台/狀態註冊',
      txt: '',
      lists: [
        { page: 'maintain', name: '狀態維護' },
        { page: 'condition', name: '機況維護' },
        { page: 'device', name: '變更設備' },
        { page: 'linefix', name: '線別維護' },
      ],
      isOn: false,
      width: '150px',
    },
    {
      id: 3,
      type: 'btn',
      class: '',
      name: 'working',
      title: '人力/工時註冊',
      isOn: false,
    },
    {
      id: 4,
      type: 'btn',
      class: '',
      name: 'model',
      title: '產品Model/良率/UPH註冊',
      isOn: false,
    },
    {
      id: 5,
      type: 'sel',
      class: '',
      name: 'kpi',
      title: 'KPI指標',
      txt: '',
      lists: [
        { page: 'kpitarget', name: 'KPI算法Target' },
        { page: 'kpicreaet', name: 'KPI指標建立' },
      ],
      isOn: false,
      isShow: false,
      width: '150px',
    },
    {
      id: 6,
      type: 'btn',
      class: '',
      name: 'cycletime',
      title: '線別產品機台CycleTime',
      isOn: false,
    },
  ];

  ngOnInit(): void {
    const currentRoute = this.router.url;
    let s = currentRoute.split('/');
    let last = s.length - 1;
    switch (s[last]) {
      case 'Option':
        this.option_sel[0].isOn = true;
        this.option_sel[0].txt = '權限設定';
        break;
      case 'pageset':
        this.option_sel[0].isOn = true;
        this.option_sel[0].txt = '頁面設定';
        break;
      case 'roleset':
        this.option_sel[0].isOn = true;
        this.option_sel[0].txt = '角色設定';
        break;
      case 'recipe':
        this.option_sel[1].isOn = true;
        this.option_sel[1].txt = 'Recipe Template';
        break;
      case 'parameter':
        this.option_sel[1].isOn = true;
        this.option_sel[1].txt = '參數設定';
        break;
      case 'maintain':
        this.option_sel[2].isOn = true;
        this.option_sel[2].txt = '狀態維護';
        break;
      case 'condition':
        this.option_sel[2].isOn = true;
        this.option_sel[2].txt = '機況維護';
        break;
      case 'device':
        this.option_sel[2].isOn = true;
        this.option_sel[2].txt = '變更設備';
        break;
      case 'linefix':
        this.option_sel[2].isOn = true;
        this.option_sel[2].txt = '線別維護';
        break;
      case 'model':
        this.option_sel[4].isOn = true;
        break;
      case 'working':
        this.option_sel[3].isOn = true;
        break;
      case 'kpitarget':
        this.option_sel[5].isOn = true;
        this.option_sel[5].txt = 'KPI算法Target';
        break;
      case 'kpicreaet':
        this.option_sel[5].isOn = true;
        this.option_sel[5].txt = 'KPI指標建立';
        break;
      case 'cycletime':
        this.option_sel[6].isOn = true;
        break;
      default:
        break;
    }
    console.log('s[last]', s[last]);
  }

  selShowHandler(s: number) {
    if (!this.option_sel[s].isShow) {
      for (let i = 0; i < this.option_sel.length; i++) {
        this.option_sel[i].isShow = false;
      }
      this.option_sel[s].isShow = true;
    } else {
      this.option_sel[s].isShow = false;
    }
  }

  option_page(obj: any) {
    console.log('obj', obj.id);
    console.log('obj.list.page', obj.list.page);
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
    if (obj.list.page == 'permissions') {
      this.router.navigate(['/home/Option/']);
    } else {
      this.router.navigate(['/home/Option/' + obj.list.page]);
    }
  }

  alert_close(s: string) {}
}
