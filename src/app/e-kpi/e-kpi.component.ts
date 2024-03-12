import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelCalendarComponent } from '../model-calendar/model-calendar.component';

@Component({
  selector: 'app-e-kpi',
  standalone: true,
  imports: [CommonModule, ModelCalendarComponent],
  templateUrl: './e-kpi.component.html',
  styleUrl: './e-kpi.component.scss',
})
export class EKpiComponent {
  kpi_filter = {
    start: {
      isShow: false,
      year: 2024,
      month: 2,
      day: 11,
      hour: 10,
      min: 11,
    },
    end: {
      isShow: false,
      year: 2024,
      month: 3,
      day: 11,
      hour: 10,
      min: 11,
    },
  };
  calendar = {
    state: '',
    isShow: false,
    year: 2024,
    month: 2,
    day: 11,
    hour: 10,
    min: 11,
  };

  dateHanler(s: string) {
    var item: any;
    if (s == 'start') {
      this.kpi_filter.end.isShow = false;
      this.kpi_filter.start.isShow = !this.kpi_filter.start.isShow;
      item = this.kpi_filter.start;
    } else if (s == 'end') {
      this.kpi_filter.start.isShow = false;
      this.kpi_filter.end.isShow = !this.kpi_filter.end.isShow;
      item = this.kpi_filter.end;
    }
    this.calendar.state = s;
    this.calendar.year = item.year;
    this.calendar.month = item.month;
    this.calendar.day = item.day;
    this.calendar.hour = item.hour;
    this.calendar.min = item.min;
  }

  calerdarReturnHandler(obj: any) {
    console.log('calerdarReturnHandler', obj.year);
    var item: any;
    if (this.calendar.state == 'start') {
      item = this.kpi_filter.start;
    } else if (this.calendar.state == 'end') {
      item = this.kpi_filter.end;
    }
    item.isShow = false;
    item.month = obj.month;
    item.day = obj.day;
    item.hour = obj.hour;
    item.min = obj.min;
  }

  filter_lv1 = {
    name: 'lv1_sel',
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
    msg: '',
  };
  filterLv1() {
    this.filter_lv1.isShow = !this.filter_lv1.isShow;
  }

  kpi = {
    data: [] as {
      term: string;
      target: number;
      isRed: boolean;
      number: number;
      range: string;
      rotate: string;
      isNodata: boolean;
      isFav: boolean;
      detail: string;
      isShow:boolean;
    }[],
    detailboxX: 0,
    detailboxY: 0,
    detailTxt: '',
  };
  calcNum(num: number) {
    if (num >= 0 && num <= 25) {
      return '_quarter1';
    } else if (num > 25 && num <= 50) {
      return '_quarter2';
    } else if (num > 50 && num <= 75) {
      return '_quarter3';
    } else if (num > 75 && num <= 100) {
      return '_quarter4';
    } else {
      return ''; // 或者你可以选择返回一个错误提示或其他值
    }
  }
  calcRotate(num: number) {
    return num * 3.6 + 'deg';
  }
  ngOnInit(): void {
    this.kpi.data.push(
      {
        term: 'PCBA FPYR DIP',
        target: 98.5,
        isRed: false,
        number: 99,
        range: this.calcNum(99),
        rotate: this.calcRotate(99),
        isNodata: false,
        isFav: false,
        detail:
          'PCBA FPYR-11 測試站點 測試站PCBA FPYR-11 測試站點 測試站PCBA FPYR-11 測試站點 測試站PCBA FPYR-11 測試站點 測試站',
      },
      {
        term: 'PCBA FPYR13233r sDIPPCBAFPYRP PCBA FPYR13233r sDIPPCBAFPYRP',
        target: 98.5,
        isRed: true,
        number: 66,
        range: this.calcNum(66),
        rotate: this.calcRotate(66),
        isNodata: false,
        isFav: true,
        detail:
          'PCBA FPYR-11 測試站點 測試站PCBA FPYR-11 測試站點 測試站PCBA FPYR-11 測試站點 測試站PCBA FPYR-11 測試站點 測試站',
      },
      {
        term: 'DIP UPPH(D01-D06)',
        target: 10,
        isRed: false,
        number: 8,
        range: this.calcNum(8),
        rotate: this.calcRotate(8),
        isNodata: false,
        isFav: true,
        detail:
          'PCBA FPYR-11 測試站點 測試站PCBA FPYR-11 測試站點 測試站PCBA FPYR-11 測試站點 測試站PCBA FPYR-11 測試站點 測試站',
      },
      {
        term: 'DIP UPPH002',
        target: 10,
        isRed: true,
        number: 20,
        range: this.calcNum(20),
        rotate: this.calcRotate(20),
        isNodata: false,
        isFav: false,
        detail:
          'PCBA FPYR-11 測試站點 測試站PCBA FPYR-11 測試站點 測試站PCBA FPYR-11 測試站點 測試站PCBA FPYR-11 測試站點 測試站',
      },
      {
        term: 'PCBA UPPH DIP',
        target: 0,
        isRed: true,
        number: 0,
        range: this.calcNum(0),
        rotate: this.calcRotate(0),
        isNodata: true,
        isFav: false,
        detail:
          'PCBA FPYR-11 測試站點 測試站PCBA FPYR-11 測試站點 測試站PCBA FPYR-11 測試站點 測試站PCBA FPYR-11 測試站點 測試站',
      }
    );

    // date: '2023/12月',
    // number: 99,

    //
    //
    // detail: 'PCBA FPYR-11 測試站點 測試站PCBA FPYR-11 測試站點 測試站PCBA FPYR-11 測試站點 測試站PCBA FPYR-11 測試站點 測試站'
  }

  moreHandler(event: MouseEvent, i: number) {
    event.stopPropagation();
    const button = event.target as HTMLButtonElement;
    const rect = button.getBoundingClientRect();
    const x = rect.left;
    const y = rect.top;
    this.kpi.detailboxX = x;
    this.kpi.detailboxY = y;
    this.kpi.detailTxt = this.kpi.data[i].detail;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (this.kpi.detailTxt !== '') {
      this.kpi.detailTxt = '';
    }
  }
}
