import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlertDelmsgComponent } from '../alert-delmsg/alert-delmsg.component';

@Component({
  selector: 'app-option-roleset-list',
  standalone: true,
  imports: [CommonModule, AlertDelmsgComponent],
  templateUrl: './option-roleset-list.component.html',
  styleUrl: './option-roleset-list.component.scss',
})
export class OptionRolesetListComponent {
  constructor(private router: Router) {}
  alert_crateRole = false;
  alertMsg = {
    show: false,
    title: '',
    msg: '',
    str: '',
  };
  editRole(num: number) {
    this.router.navigate(['/home/Option/roleset/' + num]);
  }

  createRole() {
    this.alert_crateRole = true;
  }
  delRole(e: Event) {
    e.stopPropagation();
    this.alertMsg.show = true;
    this.alertMsg.title = '刪除角色';
    this.alertMsg.msg = '您確定要刪除該角色？';
    this.alertMsg.str = 'alertdel';
  }
  alert_del(e: Event) {
    // 確認刪除事件
  }
  alert_close(s: string) {
    switch (s) {
      case 'create':
        this.alert_crateRole = false;
        break;
      case 'delmsg':
        this.alertMsg.show = false;
        break;
      default:
        break;
    }
  }
}
