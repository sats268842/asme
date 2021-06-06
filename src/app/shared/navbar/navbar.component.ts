import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    isSticky: boolean = false;
    toggle: boolean = false;
    constructor() { }
    @HostListener('window:scroll', ['$event'])
    checkScroll() {
      this.isSticky = window.pageYOffset >= 50;
    }
    ngOnInit(): void {
    }
    
    menuToggle(){
      this.toggle = !this.toggle;
     
    }
    onClick(){
      this.toggle =false;
    }
   

}
