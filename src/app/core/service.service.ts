import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
    
 events= [
  {
    'title': 'SHESPIRE',
    'url': 'shespire',
    'subtitle': '',
    'img': 'https://res.cloudinary.com/www-santhoshthomas-xyz/image/upload/v1623174766/asme/Shespire_square_with_logo_jaqmdi.jpg',
    'img1': 'https://res.cloudinary.com/www-santhoshthomas-xyz/image/upload/v1623143607/asme/Shespire_square_ny4khu.jpg',
    'day': '13',
    'time': 'June | 6.00 PM - 7.30 PM',
    'short': 'An exclusive event for women in the field of engineering to have witty yet mature talks, fun-filled tasks, and of course, a vibe gang to hang on over a cup of coffee.',
    'details': 'YUGMA 2021 presents before you ‘SHESPIRE’ - a dream of a platform to shed off your insecurities and sparkle your persona! \<br><br>\  “SHESPIRE” is an exclusive event for women in the field of engineering to have witty yet mature talks, fun-filled tasks, and of course, a vibe gang to hang on over a cup of coffee. \<br><br>\ \<ul>\ \<li>\Date : 13th of June, 2021\</li>\ \<li>\ Time : 6:00pm - 7:30pm IST\</li>\ \<li>\‍Venue : Google Meet \</li>\ \</ul> \<br><br>\ Let this be your space to kick off your inhibitions and to wear your ever-shining armor in style!\<br><br>\ So just don’t let this opportunity slip away!!!!\<br><br>\ Who knows? May this be a life-changing point! \<br><br>\ Now, all we assure you is that, at the end of the day, this session is going to make you leave with a smile on your face and confidence in yourself.\<br><br>\ SHESPIRE - A tribute to the unstoppable woman in you!\<br><br>\ Ps. Limited seats available \<br><br>\ \<span class="main">\ SHESPIRE - A tribute to the unstoppable woman in you! \</span>\ ',
    'register': true,
    'registrationLink': 'https://forms.gle/ooKU5k22jRx1f3mf6',
    'active': true

  },
  
  {
    'title':'Humour Sapiens',
    'url': 'humoursapiens',
    'subtitle': '',
    'img': 'https://res.cloudinary.com/www-santhoshthomas-xyz/image/upload/v1623143611/asme/humour_sapiens_square_ydcgng.jpg',
    'day': '17',
    'time': 'June | SUBMISSON DEADLINE',
    'img1': 'https://res.cloudinary.com/www-santhoshthomas-xyz/image/upload/v1623161412/asme/humour_sapiens_square_1_vcnfnq.jpg',
    'short': 'An online stand-up comedy competition to throw your wit and sarcasm into the crowd.',
    'details': 'Comedy, we may say, is society protecting itself - with a smile - J B Priestley \<br><br>\ These are tough times for all of us here, longing to be back in college, missing friends and our loud laughters.\<br><br>\ Though the situation ain’t gonna change so soon, yet we thought of doing a bit.\<br><br>\ YUGMA 2021 brings you an opportunity to develop creativity and sense of humour to identify that terrific Chandler Bing in you through  ‘ HUMOUR SAPIENS ’ - an online stand up comedy competition on the topic \<b>\"COLLEGE LIFE"\</b>\ \<br><br>\ Let this be your chance to unleash the Sarcastic Beast in you.\<br><br>\ So gear up, grab your funny tongues and join us in the most awaited hysterical competition from YUGMA 2021.\<br><br>\ \<span class="high">\ GUIDELINES \</span>\ \<br><br>\ Participants should upload the video along with the registration. \<br>\ \<ul>\ \<li>\⭕ Time limit-  2 to 5 mins\</li>\ \<li>\⭕ Video limit- 50 MB\</li>\ \<li>\⭕ Your material must be original, if found to be copied from another comic you will be disqualified from the event.\</li>\ \<li>\⭕ Editing is not allowed\</li>\ \</ul>\ \<br><br>\ Cheers to more guffawing & entertainment !\<br><br>\ \<span class="main">\ Registration closes on June 17. \</span>\ ',
    'register': true,
    'registrationLink': 'https://forms.gle/1npj7Utjcd518z9YA',
    'active': true

  },
  {
    'title': 'Bazinga',
    'url': 'bazinga',
    'subtitle': '',
    'short': 'An idea-pitching competition exclusively for budding Technopreneurs to showcase their innovation and technical knowledge and to let the world know your thought product.',
    'img': 'https://res.cloudinary.com/www-santhoshthomas-xyz/image/upload/v1623336753/asme/bazzinga_2-min_scxl0e.jpg',
    'img1': 'https://res.cloudinary.com/www-santhoshthomas-xyz/image/upload/v1623336753/asme/bazzinga_2-min_scxl0e.jpg',
    'day': '20',
    'time': 'June | 10.00 AM - 12.00 PM',
    'details': 'Bazinga is looking for innovative ideas. It is a part of a series of competitions hosted by YUGMA 2021 . The competition is open to all students with ideas related to Engineering products and Businesses. \<br><br>\ \<span class="high">\ Problem statement \</span>\ \<br><br>\ Design a product which can aid humanity during natural disasters. \<br><br>\ In the 20 years between 2000-2019, more than 1.5 million people died and more than 4 billion people were affected by disasters. We cannot stop natural disasters but we can arm ourselves with knowledge: so many lives wouldn\'t have to be lost if there was enough disaster preparedness. Let this be a stage to ignite your innovative thoughts and save lives. \<br><br>\ Requirements: \<br><br>\ \<ul>\ \<li>\Students may register as a team of two or as an individual.\</li>\ \<li>\Team members must be involved in all aspects of the pitching competition. \</li>\ \<li>\The team must show a balancing of skills in Engineering and other relevant areas.\</li>\ \</ul>\ \<br><br>\ Guidelines : \<br><br>\ \<ul>\ \<li>\Students have to send the abstracts before the deadline. \<\li>\ \<li>\Top ideas will be shortlisted by the judges. \<\li>\ \<li>\Selected students have to provide detailed PPT presentations. \<\li>\ \<li>\Scores from both the abstract and the presentation will be taken into account for the final scores\<\li>\ \<li>\ Top scorers will be awarded. \<\li>\  \</ul>\ \<br>\ Venue : Google meet \<br><br>\ Prize : 4.5k worth prizes \<br><br>\ ☎️ For queries : \<br>\ 📞 Aaron - 6235412348 📞 Alfiya - 9074717001',
    'pdf': '../../../assets/pdf/RULE BOOK-BAZINGA.pdf',
    'register': true,
    'active': true
  }  ,
  {
    'title': 'CAD BATTLE - Blueprint',
    'subtitle': '',
    'url': 'cadbattle',
    'img': 'https://res.cloudinary.com/www-santhoshthomas-xyz/image/upload/v1623336753/asme/bp_1-min_qh1kvy.jpg',
    'img1': 'https://res.cloudinary.com/www-santhoshthomas-xyz/image/upload/v1623336753/asme/bp_2_1_-min_vltbim.jpg',
    'day': '18',
    'short': 'A unique engineering designing competition to find out the ingenious designer in you but with a twist !',
    'time': 'June | 7.00 - 7.30 PM',
    'pdf': '../../../assets/pdf/CAD BATTLE - Blueprint.pdf',
    'details': 'Designing is not a Profession but an Attitude, now it\'s your time to show-off your ATTITUDE in style! \<br><br>\ YUGMA 2021 prestigiously presents before you BLUEPRINT  to challenge you to see who will achieve the impossible! \<br><br>\ Blueprint is a unique engineering designing competition conducted to find out the most ingenious designer among us but with a twist. The participants will be given a problem statement and your CAD design must be drawn as a solution to it. Yes, you heard that right!\<br><br>\ So, what do you say?\<br><br>\ You think you got what it takes to be YUGMA 2021’s  best designer?\<br><br>\ Are you ready to take up this challenge?\<br><br>\ If yes, BRAVO!… Here you go !\<br><br>\ \<span class="high">\ Subject : \</span>\ \<br>\ Oxygen Cylinder Valve :- To create a new valve for oxygen cylinder with given constraints. \<br><br>\ RULES \<br><br>\ General \<ul>\ \<li>\💡 Participants must refrain from collecting designs from the internet. Any form of plagiarism will lead to the disqualification of the participant<\li>\ \<li>\💡The drawings will be evaluated by a panel of experts and their decision will be final and conclusive<\li>\ \<li>\💡Prizes worth Rs 4000 /-<\li>\ \</ul>\ \<br><br>\ Design \<ul>\ \<li>\ 💡The design must be an original content created and owned by the participant\<\li>\ \<li>\💡Any form of plagiarism will lead to immediate disqualification. \<\li>\ \<li>\💡Usage of design elements previously created by the participants are strictly prohibited as they have to be created within the span of the competition.  \<\li>\ \</ul>\ \<br><br>\ Submission deadline : 16th June 2021 \<br><br>\ Submission : \<br>\ The drawings must be submitted as .stp file with proper reasoning and naming. Along with the file it is necessary to send a PDF file explaining your design.',
    'register': true,
    'active': true
  },
    
  {
    'title': 'Digital Holmes',
    'subtitle': '',
    'url': 'digitalholmes',
    'img': 'https://res.cloudinary.com/www-santhoshthomas-xyz/image/upload/v1623390962/asme/DIGITAL_HOMLES_ovuyew.jpg',
    'img1': 'https://res.cloudinary.com/www-santhoshthomas-xyz/image/upload/v1623390962/asme/DIGITAL_HOMLES_ovuyew.jpg',
    'day': '19',
    'short': 'An electrifying virtual treasure hunt that takes you through a story as it challenges your thinking skills to the core.',
    'time': 'June | 9.00 AM',
    'details': '',
    'register': true,
    'active': true
  },
  {
    'title': 'G.O.A.T',
    'url': 'goat',
    'subtitle': 'Round-1',
    'img': 'https://res.cloudinary.com/www-santhoshthomas-xyz/image/upload/v1623155299/asme/comingsoon_a3kdmk.png',
    'day': '19',
    'short': 'Compete with other fellow students and prove you are the best tech student in the lot.',
    'time': 'June | 10.00 AM - 12.00 PM',
    'details': '',
    'register': true,
    'active': false

  },
  {
    'title': 'Pride And Unprejudiced',
    'subtitle': '',
    'url': 'talksession1',
    'short': '',
    'img': 'https://res.cloudinary.com/www-santhoshthomas-xyz/image/upload/v1623155299/asme/comingsoon_a3kdmk.png',
    'day': '18',
    'time': 'June | 7.00 PM - 7.30 PM',
    'details': '',
    'register': true,
    'active': false

  },

  {
    'title': 'Bridge',
    'url': 'bridge',
    'subtitle': '',
    'img': 'https://res.cloudinary.com/www-santhoshthomas-xyz/image/upload/v1623155299/asme/comingsoon_a3kdmk.png',
    'day': '12',
    'short': '‘Industry\'s expectation from a recruit’  and ‘Expectations from a budding Researcher’.',
    'time': 'June | 6:30 PM to 7:30 PM',
    'details': ' ',
    'register': false,
    'active': false
  },
  

  {
    'title': 'E - Talk',
    'url': 'e-talk',
    'subtitle': '-Vinay Menon',
    'img': 'https://res.cloudinary.com/www-santhoshthomas-xyz/image/upload/v1623155299/asme/comingsoon_a3kdmk.png',
    'day': '18',
    'time': 'June | 7.00 PM - 7.30 PM',
    'short': 'Coz, Vinay Menon has some fun witty tales to share.',
    'details': "\"Your heart is where your treasure is, and you must find your treasure in order to make sense of everything.<br />   Paulo Coelho\n\nHere comes ASME EFx with an electrifying virtual treasure hunt event. \nThrough an  exciting digital puzzles the participants are going to sharpen the sequential thinking \nskills  about the current pandemic scenario.\n\n 🔰 Prizes worth RS 4000 /-♨️\n 🔰 Individual participation \n 🔰The event will be hosted through website.\n 🔰Will go live by June 12, Saturday morning and close by June 13, Sunday noon. \n\n In this digital treasure hunt we will be following up a storyline.\nAnd the theme goes like:\n\nThe COVID-19 pandemic has evolved into a deadlier disease. Once infected the virus will be eradicated in about two weeks, but most fail to make it and depart this life.\nThe govt has issued strict lockdowns due to the massive increase in death rates which brought the economic life stand still.\nRiots break out in the streets, govt is unable to exercise control over people, cities are ruled by gangs and the like which makes the situation worse.\n Its time for a superhero . \nAmid the ongoing pandemic, A graduate mechanical engineer wakes up. A crowned one man army to fight against the pandemic with his greatest powers of knowledge and skills to bring back to normalcy. A combat between man of courage and pandemic . A  combat for the existence of man kind.\n\n Will our superhero be the saviour❗\n Soldier are u ready ⁉️\n SUIT UP ‼️",
    'register': true,
    'active': false

  },





  {
    'title': 'Spirited Symphony',
    'subtitle': '',
    'url': 'talksession2',
    'short': '',
    'img': 'https://res.cloudinary.com/www-santhoshthomas-xyz/image/upload/v1623155299/asme/comingsoon_a3kdmk.png',
    'day': '18',
    'time': 'June | 7.00 PM - 7.30 PM',
    'details': '',
    'register': true,
    'active': false

  }
]

getAllEvents(){
  return this.events.slice();
}
getEvent(item){
  console.log(item)
  let event =this.events.find(x => x.url == item.url);
  console.log(event)
  return event;
  // return this.events.filter(x => x.url == url)[0];
}
getEventByParam(param){
  let event =this.events.find(x => x.url == param);
  console.log(event)
  return event;
}

}
