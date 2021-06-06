// @ts-ignore
// @ts-nocheck
import { Component, OnInit } from '@angular/core';

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
  i=0;
  interval;
  ngOnInit(): void {
    
    
  }

 ngAfterViewInit(): void {
   //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
   //Add 'implements AfterViewInit' to the class.
  this.interval = setInterval(() => {
    if(this.speakers<=3){
      this.speakers++;
     
    }
  if(this.sponors<=10){
    this.sponors++;
}
if(this.events<=6){
  this.events++;
}
if(this.sponors==11){
  clearInterval(this.interval);
}

},300);
 }
}
