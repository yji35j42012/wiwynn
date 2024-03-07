import { Component } from '@angular/core';
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
    lists: [
      's1',
      's2',
      's3',
      's4',
      's5',
      's6',
    ],
    isShow: false,
    msg: 'line',
  }
  selShow(s: string) {
    if (s == 'equipment_sel') {
      this.equipment_sel.isShow = !this.equipment_sel.isShow;
      this.model_sel.isShow = false;
      this.line_sel.isShow = false;
    } else if (s == 'model_sel') {
      this.model_sel.isShow = !this.model_sel.isShow;
      this.equipment_sel.isShow = false;
      this.line_sel.isShow = false;
    } else if (s == 'line_sel') {
      this.line_sel.isShow = !this.line_sel.isShow;
      this.equipment_sel.isShow = false;
      this.model_sel.isShow = false;
    }
  }
  selHandler(s: any) {
    if (s.name == 'equipment_sel') {
      this.equipment_sel.title = s.title;
      this.equipment_sel.isShow = false;
    } else if (s.name == 'model_sel') {
      this.model_sel.title = s.title;
      this.model_sel.isShow = false;
    } else if (s.name == 'line_sel') {
      this.line_sel.title = s.title;
      this.line_sel.isShow = false;
    }
  }

  parameter = {
    isShow: false,
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

  queryHandler() {
    this.parameter.isShow = true;
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
  }

  clone = {
    isShow: false,
  };
  cloneAlert = {
    isShow: false,
  };
  cloneHandler() {
    this.clone.isShow = true;
  }
  cancelClone() {
    this.clone.isShow = false;
  }
  submitClone() {
    this.cloneAlert.isShow = true;
  }
  alert_close(s: string) {
    switch (s) {
      case 'cloneAlert':
        this.cloneAlert.isShow = false;
        break;
    }
  }
}
