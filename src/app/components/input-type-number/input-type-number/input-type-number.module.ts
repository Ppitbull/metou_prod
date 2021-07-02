import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTypeNumberComponent } from './input-type-number.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InputTypeNumberComponent
  ],
  imports: [
    CommonModule,
    NgxIntlTelInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[InputTypeNumberComponent]
})
export class InputTypeNumberModule { }
