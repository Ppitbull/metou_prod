import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';
import "src/assets/authorized/js/app.js"
// // import "src/assets/authorized/js/modules/feather.js"
// import "src/assets/authorized/css/app.css"
import SimpleBar from 'simplebar';


@Component({
  selector: 'app-authorized-layout',
  templateUrl: './authorized-layout.component.html',
  styleUrls: [
    './authorized-layout.component.scss'  
  ],
  encapsulation: ViewEncapsulation.None
})
export class AuthorizedLayoutComponent implements OnInit {

  constructor(private container:ElementRef) { }

  ngOnInit(): void {
    // const sidebarElement = this.container.nativeElement.getElementsByClassName("sidebar")[0];
    // const sidebarToggleElement = this.container.nativeElement.getElementsByClassName("sidebar-toggle")[0];
  
    // sidebarToggleElement.addEventListener("click", () => {
    //   sidebarElement.classList.toggle("collapsed");
  
    //   sidebarElement.addEventListener("transitionend", () => {
    //     window.dispatchEvent(new Event("resize"));
    //   });
    // });
    const simpleBarElement = document.getElementsByClassName("js-simplebar")[0];
  
  if(simpleBarElement){
    /* Initialize simplebar */
    console.log("lmksdqfj ", document.getElementsByClassName("js-simplebar")[0])
    new SimpleBar( document.getElementsByClassName("js-simplebar")[0] as HTMLElement)
  
    const sidebarElement = document.getElementsByClassName("sidebar")[0];
    const sidebarToggleElement = document.getElementsByClassName("sidebar-toggle")[0];
  
    sidebarToggleElement.addEventListener("click", () => {
      sidebarElement.classList.toggle("collapsed");
  
      sidebarElement.addEventListener("transitionend", () => {
        window.dispatchEvent(new Event("resize"));
      });
    });
  }
  }

}
