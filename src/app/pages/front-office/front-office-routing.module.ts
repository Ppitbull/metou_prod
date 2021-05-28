import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizedLayoutComponent } from 'src/app/layout/authorized/authorized-layout/authorized-layout.component';
import { GuestLayoutComponent } from 'src/app/layout/guest/guest-layout/guest-layout.component';
import { LandingPageComponent } from './landing-page/landing-page.component';



const routes: Routes = [
  {
    path: '',
    component: GuestLayoutComponent,
    children: [
      { path: '', component: LandingPageComponent, pathMatch: 'full'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontOfficeRoutingModule { }
