import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-option-createsecmenu',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './option-createsecmenu.component.html',
	styleUrl: './option-createsecmenu.component.scss'
})
export class OptionCreatesecmenuComponent {
	@Input() menuContent: any = {}
}
