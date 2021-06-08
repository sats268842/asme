// @ts-ignore
// @ts-nocheck
import { Component,HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
 
  constructor() { }
  speakers: number=0;
  sponors: number=0;
  events: number=0;
  scroll: boolean= false;
  i=0;
  interval;
  ngOnInit(): void {
    
    
  }
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
  if(window.pageYOffset >= 100){
    this.scroll =true
  }
  else{
    this.scroll= false
  }
  }
 ngAfterViewInit(): void {
   //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
   //Add 'implements AfterViewInit' to the class.
   
  this.interval = setInterval(() => {
    if(this.scroll){
    if(this.speakers<=5){
      this.speakers++;
     
    }
  if(this.sponors<=9){
    this.sponors++;
}
if(this.events<=6){
  this.events++;
}
if(this.sponors==11){
  clearInterval(this.interval);
}
    }

},400);
 }
}
