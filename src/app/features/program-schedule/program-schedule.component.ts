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
      'title': 'Inauguration Ceremony',
      'subtitle': '',
      'time': '6.30 PM - 7.00 PM',
      'details': '',
      'register': false,

    },
    {
      'title': 'E-Talk',
      'subtitle': 'Vinay Menon',
      'time': '7.00 PM - 7.30 PM',
      'details': '',
      'register': false,

    },
    {
      'title': 'Bodhi',
      'subtitle': 'Interactive session with Mr.Maithreyan',
      'time': '7.45 PM - 8.45 PM',
      'details': "\"Your heart is where your treasure is, and you must find your treasure in order to make sense of everything.<br />   Paulo Coelho\n\nHere comes ASME EFx with an electrifying virtual treasure hunt event. \nThrough an  exciting digital puzzles the participants are going to sharpen the sequential thinking \nskills  about the current pandemic scenario.\n\n 🔰 Prizes worth RS 4000 /-♨️\n 🔰 Individual participation \n 🔰The event will be hosted through website.\n 🔰Will go live by June 12, Saturday morning and close by June 13, Sunday noon. \n\n In this digital treasure hunt we will be following up a storyline.\nAnd the theme goes like:\n\nThe COVID-19 pandemic has evolved into a deadlier disease. Once infected the virus will be eradicated in about two weeks, but most fail to make it and depart this life.\nThe govt has issued strict lockdowns due to the massive increase in death rates which brought the economic life stand still.\nRiots break out in the streets, govt is unable to exercise control over people, cities are ruled by gangs and the like which makes the situation worse.\n Its time for a superhero . \nAmid the ongoing pandemic, A graduate mechanical engineer wakes up. A crowned one man army to fight against the pandemic with his greatest powers of knowledge and skills to bring back to normalcy. A combat between man of courage and pandemic . A  combat for the existence of man kind.\n\n Will our superhero be the saviour❗\n Soldier are u ready ⁉️\n SUIT UP ‼️",
      'register': true,
    }
  ]

  day2 = [
    {
      'title': 'Digital Holmes',
      'subtitle': 'Website Goes Live - The Hunt Begins',
      'time': '9.00 AM',
      'details': '',
      'register': true,

    },
    {
      'title': 'G.O.A.T',
      'subtitle': 'Round 1 - Aptitude',
      'time': '10:00 AM - 11:00 AM',
      'details': 'Hey everyone👋🏻\,\
      Want to experience a trial of the process to acquire your dream job😎 . That too with rewards at the end🙃💸. Here we bring to you the perfect event to showcase your vim and vigour in excelling as a new engineer👩‍🔬🧑🏻‍💻👨🏽‍🔧👩🏼‍🏭 . Explore your skillset and build up your resume📘 by taking part in the all new best engineer competition G.O.A.T [ Greatest of all Techies ] at ASME EFx .Hark back to what enticed you into engineering and employ this opportunity to propel🛫 you towards becoming that engineer who the world requires.💯 \br\📌Event details: \br\Three rounds 🔅Aptitude Test \br\Elocution \br\🔅Interview\br\ 📌Guidelines\:\\br\🔅Individual Event.\br\🔅Selected students will be interviewed.\br\🔅Top students are selected from this.',
      'register': true,

    },
    {
      'title': 'G.O.A.T',
      'subtitle': 'Round 2 - Group Discussion',
      'time': '3:30 PM - 6:00 PM',
      'details': 'Hey everyone👋🏻\,\
      Want to experience a trial of the process to acquire your dream job😎 . That too with rewards at the end🙃💸. Here we bring to you the perfect event to showcase your vim and vigour in excelling as a new engineer👩‍🔬🧑🏻‍💻👨🏽‍🔧👩🏼‍🏭 . Explore your skillset and build up your resume📘 by taking part in the all new best engineer competition G.O.A.T [ Greatest of all Techies ] at ASME EFx .Hark back to what enticed you into engineering and employ this opportunity to propel🛫 you towards becoming that engineer who the world requires.💯 \br\📌Event details: \br\Three rounds 🔅Aptitude Test \br\Elocution \br\🔅Interview\br\ 📌Guidelines\:\\br\🔅Individual Event.\br\🔅Selected students will be interviewed.\br\🔅Top students are selected from this.',
      'register': false,

    },
    {
      'title': 'Bridge',
      'subtitle': 'Bibin Sagaram and Ronith Stanly',
      'time': '6:30 PM - 7:30 PM',
      'details': '',
      'register': false,

    },
    {
      'title': 'Talk Session - Club House ',
      'subtitle': 'Dr. Muralee Thummarukudy',
      'time': '9:00 PM - 10:00 PM',
      'details': '',
      'register': false,

    },
  ]

  day3 = [
   
    {
      'title': ' G.O.A.T',
      'subtitle': 'Round 3 - Interview',
      'time': '10.00 AM - 12.00 PM',
      'details': '',
      'register': false
    },
    {
      'title': 'Bazinga',
      'subtitle': 'Final Presentation',
      'time': '10.00 AM - 12.00 PM',
      'details': '',
      'register': true,

    }, 
    {
      'title': 'SPIRITED SYMPHONY',
      'subtitle': 'Jim Jacob (4 Musics)',
      'time': '11.00 AM - 12.00 PM',
      'details': '',
      'register': true
    },
    {
      'title': 'Digital Holmes',
      'subtitle': 'Here it ends',
      'time': '12.00 PM',
      'details': '',
      'register': false,

    },
    {
      'title': 'PRIDE AND UNPREJUDICED',
      'subtitle': 'Queerhythm',
      'time': '2.30 PM - 3.30 PM',
      'details': '',
      'register': true,

    },
    {
      'title': 'Felicitation',
      'subtitle': '',
      'time': '4.00 PM - 6.00 PM',
      'details': '',
      'register': true
    }
  ]


  eventDetails(item) {
    this.router.navigateByUrl(`/eventdetails/${item.title}`, { state: item });
  }

}
