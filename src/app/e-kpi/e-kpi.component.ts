import { Component } from '@angular/core';
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
      isShow: true,
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
    this.calendar.year = item.year;
    this.calendar.month = item.month;
    this.calendar.day = item.day;
    this.calendar.hour = item.hour;
    this.calendar.min = item.min;
  }
}
