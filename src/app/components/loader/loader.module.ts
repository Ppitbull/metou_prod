import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleLoaderComponent } from './simple-loader/simple-loader.component';
import { PopupLoaderComponent } from './popup-loader/popup-loader.component';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    SimpleLoaderComponent,
    PopupLoaderComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatProgressBarModule
  ],
  exports:[
    SimpleLoaderComponent,
    PopupLoaderComponent
  ]
})
export class LoaderModule { }
