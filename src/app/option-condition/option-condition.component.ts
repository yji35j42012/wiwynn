import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelSelectComponent } from '../model-select/model-select.component';

@Component({
  selector: 'app-option-condition',
  standalone: true,
  imports: [CommonModule, ModelSelectComponent],
  templateUrl: './option-condition.component.html',
  styleUrl: './option-condition.component.scss',
})
export class OptionConditionComponent {
  line_sel = {
    name: 'line_sel',
    title: 's1',
    lists: ['s1', 's2', 's3', 's4', 's5', 's6'],
    isShow: false,
    msg: '線別',
  };
  state_sel = {
    name: 'state_sel',
    title: 'Normal',
    lists: ['Normal', 'Charge'],
    isShow: false,
    msg: '新狀態',
  };
  selShow(s: string) {
    if (s == 'line_sel') {
      this.line_sel.isShow = !this.line_sel.isShow;
      this.state_sel.isShow = false;
    } else if (s == 'state_sel') {
      this.state_sel.isShow = !this.state_sel.isShow;
      this.line_sel.isShow = false;
    }
  }
  selHandler(s: any) {
    if (s.name == 'line_sel') {
      this.line_sel.title = s.title;
      this.line_sel.isShow = false;
    } else if (s.name == 'state_sel') {
      this.state_sel.title = s.title;
      this.state_sel.isShow = false;
    }
  }
  filter_device = {
    isShow: false,
  };
  filterDevice() {
    this.filter_device.isShow = !this.filter_device.isShow;
  }
  filter_color = {
    isShow: false,
  };
  filterColor() {
    this.filter_color.isShow = !this.filter_color.isShow;
  }
  filter_valid = {
    isShow: false,
  };
  filterValid() {
    this.filter_valid.isShow = !this.filter_valid.isShow;
  }
  filter_num = {
    isShow: false,
  };

  filterNum() {
    this.filter_num.isShow = !this.filter_num.isShow;
  }
  filter_category = {
    isShow: false,
  };
  filterCategory() {
    this.filter_category.isShow = !this.filter_category.isShow;
  }
  filter_place = {
    isShow: false,
  };
  filtePlace() {
    this.filter_place.isShow = !this.filter_place.isShow;
  }
  filter_model = {
    isShow: false,
  };
  filteModel() {
    this.filter_model.isShow = !this.filter_model.isShow;
  }
  filter_process = {
    isShow: false,
  };
  filteProcess() {
    this.filter_process.isShow = !this.filter_process.isShow;
  }
  filter_vendor = {
    isShow: false,
  };
  filteVendor() {
    this.filter_vendor.isShow = !this.filter_vendor.isShow;
  }
  filter_dept = {
    isShow: false,
  };
  filteDept() {
    this.filter_dept.isShow = !this.filter_dept.isShow;
  }
  filter_factory = {
    isShow: false,
  };
  filteFactory() {
    this.filter_factory.isShow = !this.filter_factory.isShow;
  }
  filter_name = {
    isShow: false,
  };
  filteName() {
    this.filter_name.isShow = !this.filter_name.isShow;
  }
  edit_alert = {
    state: '',
    isShow: false,
  };
  editAlert(s: string) {
    this.edit_alert.state = s;
    this.edit_alert.isShow = true;
  }
  alert_close(s: string) {
    this.edit_alert.isShow = false;
  }
}
