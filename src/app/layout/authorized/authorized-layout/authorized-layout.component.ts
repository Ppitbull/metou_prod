import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import "src/assets/authorized/js/app.js"
import "src/assets/authorized/css/app.css"
@Component({
  selector: 'app-authorized-layout',
  templateUrl: './authorized-layout.component.html',
  styleUrls: [
    './authorized-layout.component.scss'  
  ],
  encapsulation: ViewEncapsulation.None
})
export class AuthorizedLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
