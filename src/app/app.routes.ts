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
import { OptionPermissionsComponent } from './option-permissions/option-permissions.component';
import { OptionPagesetComponent } from './option-pageset/option-pageset.component';
import { OptionRolesetComponent } from './option-roleset/option-roleset.component';
import { OptionRolesetListComponent } from './option-roleset-list/option-roleset-list.component';
import { OptionRolesetEditComponent } from './option-roleset-edit/option-roleset-edit.component';
import { OptionMaintainComponent } from './option-maintain/option-maintain.component';
import { OptionConditionComponent } from './option-condition/option-condition.component';
import { OptionDeviceComponent } from './option-device/option-device.component';
import { OptionLinefixComponent } from './option-linefix/option-linefix.component';
import { OptionWorkingComponent } from './option-working/option-working.component';
import { OptionModelComponent } from './option-model/option-model.component';
import { OptionKpitargetComponent } from './option-kpitarget/option-kpitarget.component';
import { OptionKpicreateComponent } from './option-kpicreate/option-kpicreate.component';
import { OptionCycletimeComponent } from './option-cycletime/option-cycletime.component';
import { OptionRecipeComponent } from './option-recipe/option-recipe.component';
import { OptionParameterComponent } from './option-parameter/option-parameter.component';
import { EKpiSearchComponent } from './e-kpi-search/e-kpi-search.component';
import { EKpiFavoriteComponent } from './e-kpi-favorite/e-kpi-favorite.component';
import { EKpiDetailComponent } from './e-kpi-detail/e-kpi-detail.component';

export const routes: Routes = [
	{ path: '', component: LoginComponent },
	{
		path: 'home',
		component: HomeComponent,
		children: [
			{ path: '', component: HomeDetailComponent },
			{ path: 'Warroom', component: WarroomComponent },
			{
				path: 'E-KPI', component: EKpiComponent,
				children: [
					{ path: '', component: EKpiSearchComponent },
					{ path: 'favorite/:id', component: EKpiFavoriteComponent },
					{ path: 'detail/:id', component: EKpiDetailComponent },
				]
			},
			{ path: 'E-Process', component: EProcessComponent },
			{ path: 'Alarm-Center', component: AlarmCenterComponent },
			{
				path: 'Equipment-Center', component: EquipmentCenterComponent,	
			},
			{
				path: 'Option',
				component: OptionComponent,
				children: [
					{ path: '', component: OptionPermissionsComponent },
					{ path: 'pageset', component: OptionPagesetComponent },
					{
						path: 'roleset',
						component: OptionRolesetComponent,
						children: [
							{ path: '', component: OptionRolesetListComponent },
							{ path: ':id', component: OptionRolesetEditComponent },
						]
					},
					{ path: 'maintain', component: OptionMaintainComponent },
					{ path: 'condition', component: OptionConditionComponent },
					{ path: 'device', component: OptionDeviceComponent },
					{ path: 'linefix', component: OptionLinefixComponent },
					{ path: 'working', component: OptionWorkingComponent },
					{ path: 'model', component: OptionModelComponent },
					{ path: 'kpitarget', component: OptionKpitargetComponent },
					{ path: 'kpicreate', component: OptionKpicreateComponent },
					{ path: 'cycletime', component: OptionCycletimeComponent },
					{ path: 'recipe', component: OptionRecipeComponent },
					{ path: 'parameter', component: OptionParameterComponent },
				]
			},
		]
	},
];
