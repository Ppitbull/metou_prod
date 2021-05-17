import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizedLayoutComponent } from 'src/app/layout/authorized/authorized-layout/authorized-layout.component';
import { LandingPageComponent } from './landing-page/landing-page.component';



const routes: Routes = [
  {
    path: '',
    component: AuthorizedLayoutComponent,
    children: [
      { path: 'home', component: LandingPageComponent, pathMatch: 'full'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FrontOfficeRoutingModule { }
