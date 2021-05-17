import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContentComponent } from 'src/app/layout/page-content/page-content.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FrontOfficeRoutingModule } from './front-office-routing.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [  
    LandingPageComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FrontOfficeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule
  ]
})
export class FrontOfficeModule { }
