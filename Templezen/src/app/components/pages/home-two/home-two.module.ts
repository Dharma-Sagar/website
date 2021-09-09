import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { HomeTwoRoutingModule } from './home-two-routing.module';
import { HomeTwoComponent } from './home-two.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { AboutTextComponent } from './about-text/about-text.component';
import { RecentEventsComponent } from './recent-events/recent-events.component';
import { RecentSermonComponent } from './recent-sermon/recent-sermon.component';
import { BlogsComponent } from './blogs/blogs.component';
import { QuotesComponent } from './quotes/quotes.component';
import { PackagesComponent } from './packages/packages.component';
import { HistoryComponent } from './history/history.component';
import { InstagramComponent } from './instagram/instagram.component';


@NgModule({
  declarations: [
    HomeTwoComponent,
    BannerComponent,
    AboutTextComponent,
    RecentEventsComponent,
    RecentSermonComponent,
    BlogsComponent,
    QuotesComponent,
    PackagesComponent,
    HistoryComponent,
    InstagramComponent
  ],
  imports: [
    CommonModule,
    HomeTwoRoutingModule,
    SharedModule,
    SlickCarouselModule,
    NgbModule,
    CarouselModule
  ]
})
export class HomeTwoModule { }
