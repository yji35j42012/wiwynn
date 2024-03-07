import { Component } from '@angular/core';
import { ModelSelectComponent } from '../model-select/model-select.component';

@Component({
	selector: 'app-option-maintain',
	standalone: true,
	imports: [ModelSelectComponent],
	templateUrl: './option-maintain.component.html',
	styleUrl: './option-maintain.component.scss'
})
export class OptionMaintainComponent {
	type_selete = {
		title: "Loss",
		lists: ['Normal', 'Loss', 'Charge']
	}

	alert_close(s: string) {
		switch (s) {
			case 'editAelrt':

				break;

			case 'delAelrt':

				break;
			default:
				break;
		}
	}
}
