import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService } from '../../core/service.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(
    private router: Router,
    private dataService: ServiceService
  ) { }
    events:any;
  ngOnInit(): void {
        this.events = this.dataService.getAllEvents();
  }



  eventDetails(item) {
    if(item.active){
      this.router.navigateByUrl(`/eventdetails/${item.url}`, { state: item });
    }
    
  }

}
