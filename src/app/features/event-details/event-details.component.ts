import { Component, OnInit , ViewEncapsulation} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ServiceService } from 'src/app/core/service.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EventDetailsComponent implements OnInit {
  item: any
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private title: Title,
    private dataService: ServiceService,
    private meta: Meta) { 
      if(this.router.getCurrentNavigation().extras.state === undefined || null || this.dataService.getEventByParam(this.activatedRoute.snapshot.params.name) ){
        
        this.item = this.dataService.getEventByParam(this.activatedRoute.snapshot.params.name);
       
        // this.router.navigate(['../'])
      }
      else{
        // this.router.navigate(['../'])
        this.item = this.dataService.getEvent(history.state);
      }
    }

  ngOnInit(): void {
    // this.item = history.state
    if(this.item){
      this.title.setTitle(this.item.title);
      this.meta.updateTag({
      'description': this.item.short
  });
    }
   
  }

}
