import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

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

  constructor(
    private title: Title
  ) { }

  ngOnInit(): void {
    this.timecount();
    this.title.setTitle('YUGMA 2021 | ASME Student Sections - Kerala Collective');
  }


  timecount(){
    // let upgradeTime = 1623996097;
    // let seconds = upgradeTime;
    setInterval(() => {
      this.date1 = new Date(2021, 5, 18, 18, 0,0,0);
      this.date2 = new Date();
      if(this.date1 <this.date2){
        this.hour=0;
        this.minutes=0;
        this.seconds=0;
      }
      else{
      this.Difference_In_Time =( this.date1.getTime()  -this.date2.getTime());
      // console.log('count')
      this.diffInDays = 1-Math.ceil(this.Difference_In_Time/ (1000 * 3600 * 24));
      this.hour =(Math.floor(
        (this.Difference_In_Time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      this.minutes =(Math.floor(
        (this.Difference_In_Time % (1000 * 60 * 60)) / (1000 * 60)
      ));
      this.seconds = (Math.floor((this.Difference_In_Time % (1000 * 60)) / 1000));
      // console.log(this.seconds)
      }
  }, 1000);
  }
}
