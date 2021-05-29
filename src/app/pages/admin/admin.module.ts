import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { BrowserModule } from '@angular/platform-browser';
import { ProfilComponent } from './profil/profil.component';
import { ParametresComponent } from './parametres/parametres.component';



@NgModule({
  declarations: [
    AdminHomeComponent,
    DashboardComponent,
    ProfilComponent,
    ParametresComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule
  ]
})
export class AdminModule { }
