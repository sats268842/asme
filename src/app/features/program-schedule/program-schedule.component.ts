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

  day1 = [

    {
      'title': 'Inaugration Ceremony',
      'subtitle': '',
      'time': '6.30 - 7.00 PM',
      'details': '',
      'register': false,

    },
    {
      'title': 'E - Talk',
      'subtitle': '-Vinay Menon',
      'time': '7.00 - 7.30 PM',
      'details': "\"Your heart is where your treasure is, and you must find your treasure in order to make sense of everything.<br />   Paulo Coelho\n\nHere comes ASME EFx with an electrifying virtual treasure hunt event. \nThrough an  exciting digital puzzles the participants are going to sharpen the sequential thinking \nskills  about the current pandemic scenario.\n\n 🔰 Prizes worth RS 4000 /-♨️\n 🔰 Individual participation \n 🔰The event will be hosted through website.\n 🔰Will go live by June 12, Saturday morning and close by June 13, Sunday noon. \n\n In this digital treasure hunt we will be following up a storyline.\nAnd the theme goes like:\n\nThe COVID-19 pandemic has evolved into a deadlier disease. Once infected the virus will be eradicated in about two weeks, but most fail to make it and depart this life.\nThe govt has issued strict lockdowns due to the massive increase in death rates which brought the economic life stand still.\nRiots break out in the streets, govt is unable to exercise control over people, cities are ruled by gangs and the like which makes the situation worse.\n Its time for a superhero . \nAmid the ongoing pandemic, A graduate mechanical engineer wakes up. A crowned one man army to fight against the pandemic with his greatest powers of knowledge and skills to bring back to normalcy. A combat between man of courage and pandemic . A  combat for the existence of man kind.\n\n Will our superhero be the saviour❗\n Soldier are u ready ⁉️\n SUIT UP ‼️",
      'register': true,

    },
  ]

  day2 = [
    {
      'title': 'Digital Holmes',
      'subtitle': '',
      'time': '9.00 AM',
      'details': '',
      'register': true,

    },
    {
      'title': 'G.O.A.T',
      'subtitle': 'Round-1',
      'time': '10:00AM - 12:00 PM',
      'details': 'Hey everyone👋🏻\,\
      Want to experience a trial of the process to acquire your dream job😎 . That too with rewards at the end🙃💸. Here we bring to you the perfect event to showcase your vim and vigour in excelling as a new engineer👩‍🔬🧑🏻‍💻👨🏽‍🔧👩🏼‍🏭 . Explore your skillset and build up your resume📘 by taking part in the all new best engineer competition G.O.A.T [ Greatest of all Techies ] at ASME EFx .Hark back to what enticed you into engineering and employ this opportunity to propel🛫 you towards becoming that engineer who the world requires.💯 \br\📌Event details: \br\Three rounds 🔅Aptitude Test \br\Elocution \br\🔅Interview\br\ 📌Guidelines\:\\br\🔅Individual Event.\br\🔅Selected students will be interviewed.\br\🔅Top students are selected from this.',
      'register': true,

    },
    {
      'title': 'G.O.A.T',
      'subtitle': 'Round-2',
      'time': '3:30 PM - 6:00 PM',
      'details': 'Hey everyone👋🏻\,\
      Want to experience a trial of the process to acquire your dream job😎 . That too with rewards at the end🙃💸. Here we bring to you the perfect event to showcase your vim and vigour in excelling as a new engineer👩‍🔬🧑🏻‍💻👨🏽‍🔧👩🏼‍🏭 . Explore your skillset and build up your resume📘 by taking part in the all new best engineer competition G.O.A.T [ Greatest of all Techies ] at ASME EFx .Hark back to what enticed you into engineering and employ this opportunity to propel🛫 you towards becoming that engineer who the world requires.💯 \br\📌Event details: \br\Three rounds 🔅Aptitude Test \br\Elocution \br\🔅Interview\br\ 📌Guidelines\:\\br\🔅Individual Event.\br\🔅Selected students will be interviewed.\br\🔅Top students are selected from this.',
      'register': false,

    },
    {
      'title': 'Bridge',
      'subtitle': '',
      'time': '7:00 PM - 8:00 PM',
      'details': '',
      'register': false,

    },
  ]

  day3 = [
    {
      'title': 'Talk session 1',
      'subtitle': '',
      'time': '9.00 AM - 9.30 AM',
      'details': '',
      'register': true,

    },
    {
      'title': 'Talk session 2',
      'subtitle': '',
      'time': '9.00 AM - 9.30 AM',
      'details': '',
      'register': true,

    },
    {
      'title': 'Networking Session',
      'subtitle': '',
      'time': '9.00 AM - 9.30 AM',
      'details': '',
      'register': true,

    },
    {
      'title': ' G.O.A.T',
      'subtitle': 'Round-3',
      'time': '10.00 AM - 12.00 PM',
      'details': '',
      'register': false,

    },
    {
      'title': 'Bazzinga',
      'subtitle': 'Round-3',
      'time': '10.00 AM - 12.00 PM',
      'details': '',
      'register': true,

    },
    {
      'title': 'Digital Holmes',
      'subtitle': 'Round-3',
      'time': '12.00 PM',
      'details': '',
      'register': false,

    },
    {
      'title': 'Feliciataion',
      'subtitle': 'Round-3',
      'time': '4.00 PM - 6.00 PM',
      'details': '',
      'register': true,

    }
  ]


  eventDetails(item) {
    this.router.navigateByUrl(`/eventdetails/${item.title}`, { state: item });
  }

}
