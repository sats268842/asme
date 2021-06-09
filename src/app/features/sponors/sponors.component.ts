import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponors',
  templateUrl: './sponors.component.html',
  styleUrls: ['./sponors.component.scss']
})
export class SponorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logos=[
    'https://res.cloudinary.com/www-santhoshthomas-xyz/image/upload/v1623225051/asme/ASME_SSET_Chapter_holtts.jpg',
    '../../../assets/SJCET TYPO PNG.png',
    '../../../assets/SJCET TYPO PNG.png',
    '../../../assets/SJCET TYPO PNG.png'

  ]

}
