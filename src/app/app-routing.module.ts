import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestLayoutComponent } from './layout/guest/guest-layout/guest-layout.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AuthorizedLayoutComponent } from './layout/authorized/authorized-layout/authorized-layout.component';
import { StartedLayoutComponent } from './layout/started/started-layout/started-layout.component';
import { CreateAutoecoleComponent } from './components/create-autoecole/create-autoecole.component';
import { PricingPlanComponent } from './components/pricing-plan/pricing-plan.component';
import { LoginComponent } from './pages/started/login/login.component';
import { FinCreationAutoEcoleComponent } from './pages/started/fin-creation-auto-ecole/fin-creation-auto-ecole.component';
import { CreateAdminAccountComponent } from './pages/started/create-admin-account/create-admin-account.component';

const routes: Routes = [
  {
    path: '',
    component: GuestLayoutComponent,
    children: [
      { path: '', component: LandingPageComponent, pathMatch: 'full'},
    ]
  },
  {
    path: 'client',
    component: AuthorizedLayoutComponent,
    children: [
      { path: '', component: LandingPageComponent, pathMatch: 'full'},
    ]
  },
  {
    path: 'start',
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
