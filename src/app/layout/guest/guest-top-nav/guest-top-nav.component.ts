import { Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';

@Component({
  selector: 'app-guest-top-nav',
  templateUrl: './guest-top-nav.component.html',
  styleUrls: ['./guest-top-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GuestTopNavComponent implements OnInit {

  constructor(private host:ElementRef) { }

  onscroll(el,listener):void
  {
    el.addEventListener('scroll', listener)
  }

  ngOnInit(): void {
    this.addBackgroundColorOnScrolledHeader();
    this.showMobileToggle();
  }
  addBackgroundColorOnScrolledHeader()
  {
    let selectHeader = this.host.nativeElement.querySelector('#header')
      const headerScrolled = () => {
        if (window.scrollY > 100) {
          selectHeader.classList.add('header-scrolled')        
        } else {
          selectHeader.classList.remove('header-scrolled')
        }
      }
      this.onscroll(document, headerScrolled)
  }
  showMobileToggle()
  {
    this.host.nativeElement.querySelector('.mobile-nav-toggle').addEventListener('click',(e)=>{
      this.host.nativeElement.querySelector('#navbar').classList.toggle('navbar-mobile')
      e.currentTarget.classList.toggle('bi-list');
      e.currentTarget.classList.toggle('bi-x')
    });
  }

}
