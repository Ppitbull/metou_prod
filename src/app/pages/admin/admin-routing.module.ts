import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizedLayoutComponent } from 'src/app/layout/authorized/authorized-layout/authorized-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';



const routes: Routes = [
  {
    path: '',
    component: AuthorizedLayoutComponent,
    pathMatch:"full",
    children: [
      { path: 'dashbord', component: DashboardComponent, pathMatch: 'full'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
