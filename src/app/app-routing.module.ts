import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
  {
    path: '',
    loadChildren: ()=>import('./pages/front-office/front-office.module').then(m => m.FrontOfficeModule)
  }, 
  {
    path: 'start',
    loadChildren: ()=>import('./pages/started/started.module').then(m => m.StartedModule)
  },
  {
    path: 'client',
    loadChildren: ()=>import('./pages/admin/admin.module').then(m => m.AdminModule)
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
