import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelSelectComponent } from '../model-select/model-select.component';

@Component({
  selector: 'app-option-condition',
  standalone: true,
  imports: [CommonModule, ModelSelectComponent],
  templateUrl: './option-condition.component.html',
  styleUrl: './option-condition.component.scss'
})
export class OptionConditionComponent {
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
    if (s == 'line_sel') {
      this.line_sel.isShow = !this.line_sel.isShow;
    }
  }
  selHandler(s: any) {
    if (s.name == 'line_sel') {
      this.line_sel.title = s.title;
      this.line_sel.isShow = false;
    }
  }
}
