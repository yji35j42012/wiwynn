import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HomeDetailComponent } from './home-detail/home-detail.component';
import { WarroomComponent } from './warroom/warroom.component';
import { EKpiComponent } from './e-kpi/e-kpi.component';
import { EProcessComponent } from './e-process/e-process.component';
import { EquipmentCenterComponent } from './equipment-center/equipment-center.component';
import { AlarmCenterComponent } from './alarm-center/alarm-center.component';
import { OptionComponent } from './option/option.component';
export const routes: Routes = [
	{ path: '', component: LoginComponent },
	{
		path: 'home',
		component: HomeComponent,
		children: [
			{ path: '', component: HomeDetailComponent },
			{ path: 'Warroom', component: WarroomComponent },
			{ path: 'E-KPI', component: EKpiComponent },
			{ path: 'E-Process', component: EProcessComponent },
			{ path: 'Alarm-Center', component: AlarmCenterComponent },
			{ path: 'Equipment-Center', component: EquipmentCenterComponent },
			{ path: 'Option', component: OptionComponent },
		]
	},
];
