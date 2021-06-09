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
    'https://res.cloudinary.com/www-santhoshthomas-xyz/image/upload/v1623225052/asme/IMG-20210607-WA0002_w8ljlr.jpg',
    'https://res.cloudinary.com/www-santhoshthomas-xyz/image/upload/v1623225052/asme/ASME_MACE_Student_Section_logo_vm6jph.png',
    'https://res.cloudinary.com/www-santhoshthomas-xyz/image/upload/v1623225052/asme/Rajagiri_School_of_Engineering_and_Technology_ui2gvk.png',
    'https://res.cloudinary.com/www-santhoshthomas-xyz/image/upload/v1623225052/asme/ASME_SJCET_huxnxv.png',
    'https://res.cloudinary.com/www-santhoshthomas-xyz/image/upload/v1623225052/asme/TKMCE_KOLLAM_z3ndr5.png',
    'https://res.cloudinary.com/www-santhoshthomas-xyz/image/upload/v1623225053/asme/asme_mesce_pcxay5.png',
    'https://res.cloudinary.com/www-santhoshthomas-xyz/image/upload/v1623225053/asme/GEC_Barton_Hill_hpibpl.jpg'

  ]

}
