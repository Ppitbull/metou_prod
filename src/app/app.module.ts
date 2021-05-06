import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageContentComponent } from './layout/page-content/page-content.component';
import { GuestTopNavComponent } from './layout/guest/guest-top-nav/guest-top-nav.component';
import { GuestFooterComponent } from './layout/guest/guest-footer/guest-footer.component';
import { GuestLayoutComponent } from './layout/guest/guest-layout/guest-layout.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AuthorizedFooterComponent } from './layout/authorized/authorized-footer/authorized-footer.component';
import { AuthorizedTopNavComponent } from './layout/authorized/authorized-top-nav/authorized-top-nav.component';
import { AuthorizedLeftSidenavComponent } from './layout/authorized/authorized-left-sidenav/authorized-left-sidenav.component';
import { AuthorizedLayoutComponent } from './layout/authorized/authorized-layout/authorized-layout.component';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { StartedLayoutComponent } from './layout/started/started-layout/started-layout.component';
import { PricingPlanComponent } from './components/pricing-plan/pricing-plan.component';
import { CreateAutoecoleComponent } from './components/create-autoecole/create-autoecole.component';
import { StudentLoginComponent } from './pages/started/student-login/student-login.component';
import { LoginComponent } from './pages/started/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FinCreationAutoEcoleComponent } from './pages/started/fin-creation-auto-ecole/fin-creation-auto-ecole.component';
import { CreateAdminAccountComponent } from './pages/started/create-admin-account/create-admin-account.component';
@NgModule({
  declarations: [
    AppComponent,
    PageContentComponent,
    GuestTopNavComponent,
    GuestFooterComponent,
    GuestLayoutComponent,
    LandingPageComponent,
    AuthorizedFooterComponent,
    AuthorizedTopNavComponent,
    AuthorizedLeftSidenavComponent,
    AuthorizedLayoutComponent,
    AdminHomeComponent,
    StartedLayoutComponent,
    PricingPlanComponent,
    CreateAutoecoleComponent,
    StudentLoginComponent,
    LoginComponent,
    FinCreationAutoEcoleComponent,
    CreateAdminAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
