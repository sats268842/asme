import { AfterViewInit, Component, OnInit } from '@angular/core';
import Swiper from 'swiper/bundle';

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
  diffInDays: number = 0;
  hour: number = 0;
  minutes = 0;
  seconds = 0;
  Difference_In_Time=0;
  date1;
  date2;

  i = 0;
  h = 0;
  m = 0;
  s = 0;
  ngOnInit() {
    this.getTime();
  }
  getTime() {
    this.date1 = new Date();
    this.date2 = new Date('03/30/2021');

    // To calculate the time difference of two dates
     this.Difference_In_Time = this.date2.getTime() - this.date1.getTime();

    // To calculate the no. of days between two dates
    //  this.diffInDays = Math.ceil(Difference_In_Time / (1000 * 3600 * 24));
    //  this.hour = Math.floor(Difference_In_Time % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    //  this.minutes= Math.floor(Difference_In_Time % (1000 * 60 * 60) / (1000 * 60));
    //  this.seconds= Math.floor(Difference_In_Time % (1000 * 60) / 1000);

    let refreshIntervalId = setInterval(() => {

      if(this.diffInDays !== Math.ceil(this.Difference_In_Time / (1000 * 3600 * 24)))

      {

        if (this.i < Math.ceil(this.Difference_In_Time / (1000 * 3600 * 24))) {
          this.diffInDays = this.diffInDays + 1;
          this.i = this.i + 1;
        }

        if (
          this.h <=
          Math.floor(
            (this.Difference_In_Time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          )
        ) {
          this.hour = this.hour + 1;
          this.h = this.h + 1;
        }

        if (
          this.m <=
          Math.floor((this.Difference_In_Time % (1000 * 60 * 60)) / (1000 * 60))
        ) {
          this.minutes = this.minutes + 1;
          this.m = this.m + 1;
        }
        if (this.s <= Math.floor((this.Difference_In_Time % (1000 * 60)) / 1000)) {
          this.seconds = this.seconds + 1;
          this.s = this.s + 1;
        }
      }


      else{
        console.log('exited')
        this.timecount();
        clearInterval(refreshIntervalId);
      }
        }, 80);

    //  this.diffInDays = Math.ceil(Difference_In_Time / (1000 * 3600 * 24));
    //  this.hour = Math.floor(Difference_In_Time % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    //  this.minutes= Math.floor(Difference_In_Time % (1000 * 60 * 60) / (1000 * 60));
    //  this.seconds= Math.floor(Difference_In_Time % (1000 * 60) / 1000);


  }

  timecount(){
    setInterval(() => {
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

  ngAfterViewInit(): void {
    var mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'vertical',
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });

    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml11 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /([^\x00-\x80]|\w)/g,
      "<span class='letter'>$&</span>"
    );

    anime
      .timeline({ loop: true })
      .add({
        targets: '.ml11 .line',
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: 'easeOutExpo',
        duration: 700,
      })
      .add({
        targets: '.ml11 .line',
        translateX: [
          0,
          document.querySelector('.ml11 .letters').getBoundingClientRect()
            .width + 10,
        ],
        easing: 'easeOutExpo',
        duration: 700,
        delay: 100,
      })
      .add({
        targets: '.ml11 .letter',
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 5000,
        offset: '-=775',
        delay: (el, i) => 34 * (i + 1),
      })
      .add({
        targets: '.ml11',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1000,
      });
  }
}
