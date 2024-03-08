import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelSelectComponent } from '../model-select/model-select.component';
import { AlertDelmsgComponent } from '../alert-delmsg/alert-delmsg.component';

@Component({
  selector: 'app-option-linefix',
  standalone: true,
  imports: [CommonModule, ModelSelectComponent,AlertDelmsgComponent],
  templateUrl: './option-linefix.component.html',
  styleUrl: './option-linefix.component.scss',
})
export class OptionLinefixComponent {
  filte_line = {
    isShow: false,
  };
  filterLine() {
    this.filte_line.isShow = !this.filte_line.isShow;
  }
  filte_updater = {
    isShow: false,
  };
  filterUpdater() {
    this.filte_updater.isShow = !this.filte_updater.isShow;
  }

  lineinfo_sel = {
    name: 'lineinfo_sel',
    title: 'DIP',
    lists: ['DIP', 'DIP1'],
    isShow: false,
    msg: '線別資訊',
  };
  selShow(s: string) {
    if (s == 'lineinfo_sel') {
      this.lineinfo_sel.isShow = !this.lineinfo_sel.isShow;
    }
  }
  selHandler(s: any) {
    if (s.name == 'lineinfo_sel') {
      this.lineinfo_sel.title = s.title;
      this.lineinfo_sel.isShow = false;
    }
  }
  edit_alert = {
    state: '',
    isShow: false,
  };
  alertMsg = {
    show: false,
    title: '',
    msg: '',
    str: '',
  };
  editAlert(s: string) {
    this.edit_alert.state = s;
    this.edit_alert.isShow = true;
  }
  alert_close(s: string) {
    switch (s) {
      case 'editAlert':
        this.edit_alert.isShow = false;
        break;
      case 'delmsg':
        this.alertMsg.show = false;
        break;
    }
  }

  delHandler() {
    this.alertMsg.show = true;
    this.alertMsg.title = '刪除線別';
    this.alertMsg.msg = '您確定要刪除此線別？';
    this.alertMsg.str = 'delmsg';
  }
  alert_del(s: Event) {
    //  確認要刪除的動作
  }
}
