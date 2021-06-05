import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventDetailsComponent } from './features/event-details/event-details.component';
import { HeroComponent } from './features/hero/hero.component';

const routes: Routes = [
  {
    path:'', component: HeroComponent
  },
  {
    path:'eventdetails/:name', component: EventDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
