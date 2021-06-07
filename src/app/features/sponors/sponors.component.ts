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
    '../../../assets/SJCET TYPO PNG.png',
    '../../../assets/SJCET TYPO PNG.png',
    '../../../assets/SJCET TYPO PNG.png',
    '../../../assets/SJCET TYPO PNG.png'

  ]

}
