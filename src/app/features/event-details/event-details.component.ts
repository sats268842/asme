import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  item: any
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) { 
      if(this.router.getCurrentNavigation().extras.state === undefined || null){
        this.router.navigate(['../'])
      }
    }

  ngOnInit(): void {
    this.item = history.state
  }

}
