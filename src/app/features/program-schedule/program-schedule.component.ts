import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-program-schedule',
  templateUrl: './program-schedule.component.html',
  styleUrls: ['./program-schedule.component.scss']
})
export class ProgramScheduleComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  day1=[

    {
      'title': 'Inaugration Ceremony',
      'subtitle':'',
      'time':'6.30 - 7.00 PM',
      'details': '',
      'register': false,

    },
    {
      'title': 'Vinay Menon - E-Talk',
      'subtitle':'',
      'time':'7.00 - 7.30 PM',
      'details': '',
      'register': true,

    },
  ]

  day2= [
    {
      'title': 'Digital Holmes',
      'subtitle':'',
      'time':'9.00 AM',
      'details': '',
      'register': true,

    },
    {
      'title': 'G.O.A.T',
      'subtitle':'Round-1',
      'time':'10:00AM - 12:00 PM',
      'details': '',
      'register': true,

    },
    {
      'title': 'G.O.A.T',
      'subtitle':'Round-2',
      'time':'3:30 PM - 6:00 PM',
      'details': '',
      'register': false,

    },
    {
      'title': 'Bridge',
      'subtitle':'',
      'time':'7:00 PM - 8:00 PM',
      'details': '',
      'register': false,

    },
  ]

  day3=[
    {
      'title': 'Talk session 1',
      'subtitle':'',
      'time':'9.00 AM - 9.30 AM',
      'details': '',
      'register': true,

    },
    {
      'title': 'Talk session 2',
      'subtitle':'',
      'time':'9.00 AM - 9.30 AM',
      'details': '',
      'register': true,

    },
    {
      'title': 'Networking Session',
      'subtitle':'',
      'time':'9.00 AM - 9.30 AM',
      'details': '',
      'register': true,

    },
    {
      'title': ' G.O.A.T',
      'subtitle':'Round-3',
      'time':'10.00 AM - 12.00 PM',
      'details': '',
      'register': false,

    },
    {
      'title': 'Bazzinga',
      'subtitle':'Round-3',
      'time':'10.00 AM - 12.00 PM',
      'details': '',
      'register': true,

    },
    {
      'title': 'Digital Holmes',
      'subtitle':'Round-3',
      'time':'12.00 PM',
      'details': '',
      'register': false,

    },
    {
      'title': 'Feliciataion',
      'subtitle':'Round-3',
      'time':'4.00 PM - 6.00 PM',
      'details': '',
      'register': true,

    }
  ]


  eventDetails(item){
    this.router.navigateByUrl(`/eventdetails/${item.title}`, { state: item });
  }

}
