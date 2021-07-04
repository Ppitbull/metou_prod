import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartedRoutingModule } from './started-routing.module';
import { StartedLayoutComponent } from 'src/app/layout/started/started-layout/started-layout.component';
import { CreateAdminAccountComponent } from './create-admin-account/create-admin-account.component';
import { FinCreationAutoEcoleComponent } from './fin-creation-auto-ecole/fin-creation-auto-ecole.component';
import { LoginComponent } from './login/login.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { CreateAutoecoleComponent } from './create-autoecole/create-autoecole.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from 'src/app/layout/layout.module';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog'; 
import { ModalModule } from 'ngx-bootstrap/modal';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SharedModule } from 'src/app/shared/shared-module.module';

@NgModule({
  declarations: [
    CreateAutoecoleComponent,
    StudentLoginComponent,
    LoginComponent,
    FinCreationAutoEcoleComponent,
    CreateAdminAccountComponent
  ],
  imports: [
    CommonModule,
    StartedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatDialogModule,
    MatProgressBarModule,    
    ModalModule.forRoot(),
    SharedModule
  ]
})
export class StartedModule { }
