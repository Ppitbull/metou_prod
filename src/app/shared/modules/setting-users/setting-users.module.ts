import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingUsersComponent } from './setting-users/setting-users.component';



@NgModule({
  declarations: [
    SettingUsersComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SettingUsersComponent
  ]
})
export class SettingUsersModule { }
