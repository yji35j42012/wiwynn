import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelSelectComponent } from '../model-select/model-select.component';
import { AlertDelmsgComponent } from '../alert-delmsg/alert-delmsg.component';

@Component({
  selector: 'app-option-recipe',
  standalone: true,
  imports: [CommonModule, ModelSelectComponent, AlertDelmsgComponent],
  templateUrl: './option-recipe.component.html',
  styleUrl: './option-recipe.component.scss',
})
export class OptionRecipeComponent {
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
  selShow(s: string) {
    if (s == 'equipment_sel') {
      this.equipment_sel.isShow = !this.equipment_sel.isShow;
      this.model_sel.isShow = false;
    } else if (s == 'model_sel') {
      this.model_sel.isShow = !this.model_sel.isShow;
      this.equipment_sel.isShow = false;
    }
  }
  selHandler(s: any) {
    if (s.name == 'equipment_sel') {
      this.equipment_sel.title = s.title;
      this.equipment_sel.isShow = false;
    } else if (s.name == 'model_sel') {
      this.model_sel.title = s.title;
      this.model_sel.isShow = false;
    }
  }

  recipe = {
    isShow: true,
    data: [] as { name: string }[],
  };

  editAlert = {
    state: '',
    isShow: false,
    txt: '',
  };
  alertMsg = {
    show: false,
    title: '',
    msg: '',
    str: '',
  };
  queryHandler() {
    this.recipe.isShow = true;
    this.recipe.data = [
      { name: '前刮刀壓力' },
      { name: '後刮刀壓力' },
      { name: '向前印刷速度' },
      { name: '向後印刷速度' },
    ];
  }
  editHandler(s: string) {
    this.editAlert.isShow = true;
    this.editAlert.state = s;
  }
  alert_close(s: string) {
    switch (s) {
      case 'editAlert':
        this.editAlert.isShow = false;
        break;
      case 'delmsg':
        this.alertMsg.show = false;
        break;

      default:
        break;
    }
  }
  delHandler() {
    this.alertMsg.show = true;
    this.alertMsg.title = '刪除欄位';
    this.alertMsg.msg = '您確定要刪除此欄位？';
    this.alertMsg.str = 'del';
  }
  alert_del(s: Event) {
    //  確認要刪除的動作
  }
}
