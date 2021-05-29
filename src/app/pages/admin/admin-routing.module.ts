import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizedLayoutComponent } from 'src/app/layout/authorized/authorized-layout/authorized-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ParametresComponent } from './parametres/parametres.component';
import { ProfilComponent } from './profil/profil.component';



const routes: Routes = [
  {
    path: '',
    component: AuthorizedLayoutComponent,
    children: [
      // {path:'',redirectTo:'dashbord'}, 
      { path: 'dashboard', component: DashboardComponent, pathMatch: 'full'},  
      { path: 'profil', component: ProfilComponent, pathMatch: 'full'},
      { path: 'parametres', component: ParametresComponent, pathMatch: 'full'},         
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
