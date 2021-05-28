import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleLoaderComponent } from './simple-loader/simple-loader.component';
import { PopupLoaderComponent } from './popup-loader/popup-loader.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    SimpleLoaderComponent,
    PopupLoaderComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  exports:[
    SimpleLoaderComponent,
    PopupLoaderComponent
  ]
})
export class LoaderModule { }
