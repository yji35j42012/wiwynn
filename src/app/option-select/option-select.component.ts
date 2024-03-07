import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-option-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './option-select.component.html',
  styleUrl: './option-select.component.scss',
})
export class OptionSelectComponent {
  @Input() selectContent: any = {};
  @Output() selshow = new EventEmitter();
  @Output() selEvent = new EventEmitter();

  selHandler(n: number) {
    this.selshow.emit(n);
  }
  option_item(i: number, n: any) {
    if (this.selectContent.type == 'btn') {
      this.selEvent.emit({ id: i, list: {page:n} });
    } else {
      this.selEvent.emit({ id: i, list: this.selectContent.lists[n] });
    }
  }
}
