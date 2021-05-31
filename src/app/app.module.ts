import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';

// import { SwiperModule } from 'angular/src/public-api';
// import { SwiperModule } from '../../node_modules/swiper/angular/angular/src/public-api;
import {NgsRevealModule} from 'ngx-scrollreveal';
import {MatChipsModule} from '@angular/material/chips';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HeroComponent } from './features/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgsRevealModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
