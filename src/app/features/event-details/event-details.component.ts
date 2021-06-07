import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ServiceService } from 'src/app/core/service.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  item: any
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private title: Title,
    private dataService: ServiceService,
    private meta: Meta) { 
      if(this.router.getCurrentNavigation().extras.state === undefined || null || this.dataService.getEvent(this.activatedRoute.snapshot.params.name) ){
        
        this.item = this.dataService.getEvent(this.activatedRoute.snapshot.params.name);
        this.title.setTitle(this.item.item);
          this.meta.updateTag({
        'description': this.item.short
    });
        // this.router.navigate(['../'])
      }
      else{
        this.item = this.dataService.getEvent(history.state);
        console.log(this.item)
      }
    }

  ngOnInit(): void {
    // this.item = history.state
  }

}
