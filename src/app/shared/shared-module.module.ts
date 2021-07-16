import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { PopupLoaderComponent } from './components/loader/popup-loader/popup-loader.component';
import { SimpleLoaderComponent } from './components/loader/simple-loader/simple-loader.component';
import { SettingUserProfilComponent } from './components/setting-user-profil/setting-user-profil.component';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';
import { PdfViewerComponent } from './components/pdf-viewer/pdf-viewer.component';
import { InputTypeNumberComponent } from './components/input-type-number/input-type-number.component';
import { SettingUsersModule } from './modules/setting-users/setting-users.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpLoaderFactory } from './utils/functions/translate.loader';



@NgModule({
  declarations: [
    SettingUserProfilComponent,
    SimpleLoaderComponent,
    PopupLoaderComponent,
    PdfViewerComponent,
    InputTypeNumberComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PdfJsViewerModule,
    NgxIntlTelInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatProgressBarModule,
    SettingUsersModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps:[HttpClient]
      },
      defaultLanguage: "fr"
    }),
  ],
  exports:[
    SettingUserProfilComponent,
    SettingUserProfilComponent,
    SimpleLoaderComponent,
    PopupLoaderComponent,
    PdfViewerComponent,
    InputTypeNumberComponent,
    SettingUsersModule,
    TranslateModule
  ]
})
export class SharedModule { }
