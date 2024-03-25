import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
	selector: 'app-warroom-overview',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './warroom-overview.component.html',
	styleUrl: './warroom-overview.component.scss'
})
export class WarroomOverviewComponent {
	constructor(private router: Router) { }
	lineHandler() {
		this.router.navigate(['/home/Warroom'])
	}


	over_data = [
		[
			{
				title: 'S1',
				lists: [
					{
						isCol: false, isGroup: false,
						item: [
							{ name: 'PrintPrint12345678', state: 'WAIT', stateName: 'EQ_WAIT' },
							{ name: 'SPI', state: 'PM', stateName: 'PM' },
							{ name: 'NPM-01', state: 'PM', stateName: 'PM' },
							{ name: 'NPM-02', state: 'PM', stateName: 'PM' },
							{ name: 'NPM-03', state: 'PM', stateName: 'PM' },
							{ name: 'NPM-04', state: 'PD_RUN', stateName: 'PD_RUN' },
							{ name: 'NPM-05', state: 'ENG', stateName: 'ENG' },
							{ name: 'NPM-06', state: 'OFF', stateName: 'OFF' },
							{ name: 'PRE-AOI', state: 'PD_RUN', stateName: 'PD_RUN' },
							{ name: 'Reflow', state: 'WAIT', stateName: 'WAIT' },
						]
					}
				]
			},
		],
		[

			{
				title: 't2A',
				lists: [
					{
						isCol: false, isGroup: false,
						item: [
							{ name: 'PrintEQ_WAIT', state: 'WAIT', stateName: 'EQ_WAIT' },
							{ name: 'PrintPM', state: 'PM', stateName: 'PM' },
							{ name: 'PrintPD_RUN', state: 'PD_RUN', stateName: 'PD_RUN' },
						]
					},
					{
						isCol: true, isGroup: false,
						item: [
							{ name: 'PrintEQ_WAIT', state: 'WAIT', stateName: 'EQ_WAIT' },
							{ name: 'PrintPM', state: 'PM', stateName: 'PM' },
							{ name: 'PrintPD_RUN', state: 'PD_RUN', stateName: 'PD_RUN' },
						]
					},
				]
			},
			{
				title: 't2B',
				lists: [
					{
						isCol: false, isGroup: true,
						item: [
							{ name: 'PrintEQ_WAIT', state: 'WAIT', stateName: 'EQ_WAIT' },
							{ name: 'PrintPM', state: 'PM', stateName: 'PM' },
							{ name: 'PrintPD_RUN', state: 'PD_RUN', stateName: 'PD_RUN' },
						]
					},
					{
						isCol: true, isGroup: false,
						item: [
							{ name: 'PrintEQ_WAIT', state: 'WAIT', stateName: 'EQ_WAIT' },
							{ name: 'PrintPM', state: 'PM', stateName: 'PM' },
							{ name: 'PrintPD_RUN', state: 'PD_RUN', stateName: 'PD_RUN' },
						]
					},
				]
			}
		],
		[
			{
				title: 't2C',
				lists: [
					{
						isCol: false, isGroup: false,
						item: [
							{ name: 'PrintPrint12345678', state: 'WAIT', stateName: 'EQ_WAIT' },
							{ name: 'SPI', state: 'PM', stateName: 'PM' },
							{ name: 'NPM-01', state: 'PM', stateName: 'PM' },
							{ name: 'NPM-02', state: 'PM', stateName: 'PM' },
							{ name: 'NPM-03', state: 'PM', stateName: 'PM' },
							{ name: 'NPM-04', state: 'PD_RUN', stateName: 'PD_RUN' },
							{ name: 'NPM-05', state: 'ENG', stateName: 'ENG' },
							{ name: 'NPM-06', state: 'OFF', stateName: 'OFF' },
							{ name: 'PRE-AOI', state: 'PD_RUN', stateName: 'PD_RUN' },
							{ name: 'Reflow', state: 'WAIT', stateName: 'WAIT' },
						]
					},
					{
						isCol: true, isGroup: false,
						item: [
							{ name: 'PrintPrintPrintPrint', state: 'WAIT', stateName: 'EQ_WAIT' },
							{ name: 'PrintPrintPrintPrint', state: 'WAIT', stateName: 'EQ_WAIT' },
							{ name: 'PrintPrintPrintPrint', state: 'WAIT', stateName: 'EQ_WAIT' },
							{ name: 'PrintPrintPrintPrint', state: 'WAIT', stateName: 'EQ_WAIT' },
						]
					},
					{
						isCol: true, isGroup: true,
						item: [
							{ name: 'PrintPrintPrintPrint', state: 'WAIT', stateName: 'EQ_WAIT' },
							{ name: 'PrintPrintPrintPrint', state: 'WAIT', stateName: 'EQ_WAIT' },
						]
					},
				]
			},
			{
				title: 't2D',
				lists: [
					{
						isCol: true, isGroup: false,
						item: [
							{ name: 'PrintPrintPrintPrint', state: 'WAIT', stateName: 'EQ_WAIT' },
							{ name: 'PrintPrintPrintPrint', state: 'PM', stateName: 'EQ_WAIT' },
							{ name: 'PrintPrintPrintPrint', state: 'WAIT', stateName: 'EQ_WAIT' },
							{ name: 'PrintPrintPrintPrint', state: 'WAIT', stateName: 'EQ_WAIT' },
							{ name: 'PrintPrintPrintPrint', state: 'PM', stateName: 'EQ_WAIT' },
							{ name: 'PrintPrintPrintPrint', state: 'WAIT', stateName: 'EQ_WAIT' },
						]
					},
					{
						isCol: true, isGroup: true,
						item: [
							{ name: 'PrintEQ_WAIT', state: 'WAIT', stateName: 'EQ_WAIT' },
							{ name: 'PrintPM', state: 'PM', stateName: 'PM' },
							{ name: 'PrintPD_RUN', state: 'PD_RUN', stateName: 'PD_RUN' },
						]
					},
				]
			}
		],
	]
}
