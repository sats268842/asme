import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

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


  speakers=15

  constructor() { }

  ngOnInit(): void {
    this.timecount();
  }


  timecount(){

    setInterval(() => {
      this.date1 = new Date();
      this.date2 = new Date('06/18/2021');
      this.Difference_In_Time = this.date2.getTime() - this.date1.getTime();
      console.log('count')
      this.diffInDays = Math.ceil(this.Difference_In_Time / (1000 * 3600 * 24));
      this.hour = Math.floor(
        (this.Difference_In_Time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor(
        (this.Difference_In_Time % (1000 * 60 * 60)) / (1000 * 60)
      );
      this.seconds = Math.floor((this.Difference_In_Time % (1000 * 60)) / 1000);
      console.log(this.seconds)
  }, 1000);
  }
}
