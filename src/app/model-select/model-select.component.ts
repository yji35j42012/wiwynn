import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-model-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './model-select.component.html',
  styleUrl: './model-select.component.scss',
})
export class ModelSelectComponent {
  @Input() selectContent: any = {};
  @Output() selShowEvent = new EventEmitter();
  @Output() selEvent = new EventEmitter();
  selHandler() {
    this.selShowEvent.emit(this.selectContent.name);
  }
  machineSel(value: string) {
    this.selEvent.emit({ name: this.selectContent.name, title: value });
  }
}
