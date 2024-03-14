import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { EKpiSearchComponent } from '../e-kpi-search/e-kpi-search.component';

@Component({
	selector: 'app-e-kpi',
	standalone: true,
	imports: [CommonModule,RouterOutlet, RouterModule,EKpiSearchComponent],
	templateUrl: './e-kpi.component.html',
	styleUrl: './e-kpi.component.scss',
})
export class EKpiComponent {
	constructor(private router: Router) { }

}
