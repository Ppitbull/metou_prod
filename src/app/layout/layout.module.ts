import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AuthorizedFooterComponent } from "./authorized/authorized-footer/authorized-footer.component";
import { AuthorizedLayoutComponent } from "./authorized/authorized-layout/authorized-layout.component";
import { AuthorizedLeftSidenavComponent } from "./authorized/authorized-left-sidenav/authorized-left-sidenav.component";
import { AuthorizedTopNavComponent } from "./authorized/authorized-top-nav/authorized-top-nav.component";
import { GuestFooterComponent } from "./guest/guest-footer/guest-footer.component";
import { GuestLayoutComponent } from "./guest/guest-layout/guest-layout.component";
import { GuestTopNavComponent } from "./guest/guest-top-nav/guest-top-nav.component";
import { PageContentComponent } from "./page-content/page-content.component";
import { StartedLayoutComponent } from "./started/started-layout/started-layout.component";

@NgModule({
    declarations: [
        AuthorizedFooterComponent,
        AuthorizedTopNavComponent,
        AuthorizedLeftSidenavComponent,
        AuthorizedLayoutComponent,

        GuestTopNavComponent,
        GuestFooterComponent,
        GuestLayoutComponent,

        StartedLayoutComponent,

        PageContentComponent
    ],
    imports: [
      CommonModule,
      BrowserModule
    ],
    exports:[
        AuthorizedFooterComponent,
        AuthorizedTopNavComponent,
        AuthorizedLeftSidenavComponent,
        AuthorizedLayoutComponent,

        GuestTopNavComponent,
        GuestFooterComponent,
        GuestLayoutComponent,

        StartedLayoutComponent,

        PageContentComponent
    ]
  })
  export class LayoutModule { }