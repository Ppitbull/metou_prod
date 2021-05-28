import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-loader',
  templateUrl: './simple-loader.component.html',
  styleUrls: ['./simple-loader.component.scss']
})
export class SimpleLoaderComponent implements OnInit {

  @Input() text:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
