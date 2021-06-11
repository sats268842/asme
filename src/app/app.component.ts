import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';

import * as AOS from 'aos';

declare var anime: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'asme';
  firstDate;
  secondDate;
  diffInDays: number;
  hour: number;
  minutes;
  seconds;
  Difference_In_Time=0;
  date1;
  date2;

  i = 0;
  h = 0;
  m = 0;
  s = 0;



  constructor( ) {

   }
  
  ngOnInit() {
   
    AOS.init();

  }


  ngAfterViewInit(): void {
  }
}
