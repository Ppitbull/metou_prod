import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAutoecoleComponent } from 'src/app/pages/started/create-autoecole/create-autoecole.component';
import { PricingPlanComponent } from 'src/app/components/pricing-plan/pricing-plan.component';
import { StartedLayoutComponent } from 'src/app/layout/started/started-layout/started-layout.component';
import { CreateAdminAccountComponent } from './create-admin-account/create-admin-account.component';
import { FinCreationAutoEcoleComponent } from './fin-creation-auto-ecole/fin-creation-auto-ecole.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: StartedLayoutComponent,
    children: [
      { path: 'create-autoecole', component: CreateAutoecoleComponent, pathMatch: 'full'},
      { path: 'create-admin-account', component: CreateAdminAccountComponent, pathMatch: 'full'},
      { path: 'choice-pricing-plan', component: PricingPlanComponent, pathMatch: 'full'},
      { path: 'end-setting', component: FinCreationAutoEcoleComponent, pathMatch: 'full'},
      { path: 'login', component: LoginComponent, pathMatch: 'full'},
      { path: '**', redirectTo: 'create-autoecole'}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartedRoutingModule { }
