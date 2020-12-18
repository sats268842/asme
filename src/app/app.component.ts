import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import Swiper from 'swiper/bundle';
import SwiperCore from "swiper/core";


import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

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



  constructor( private breakpointObserver: BreakpointObserver) {

   }
   @HostListener("window:resize", [])
  ngOnInit() {
    this.timecount();

  }
  timecount(){

    setInterval(() => {
      this.date1 = new Date();
      this.date2 = new Date('03/30/2021');
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

    this.breakpointObserver.observe([
      '(max-width: 768px)'
        ]).subscribe(result => {
          if (result.matches) {
            let mySwiper = new Swiper('.swiper-container',{
              slidesPerView: 2,
              spaceBetween: 30,
              slidesPerGroup: 2,
              lazy: true,
              loop: true,
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
            });
          }
          else {
            let mySwiper = new Swiper('.swiper-container',{
              // centeredSlides: true,
              slidesPerView: 4,
              spaceBetween: 30,
              slidesPerGroup: 4,
              lazy: true,
              loop: true,
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
            });
          }
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
