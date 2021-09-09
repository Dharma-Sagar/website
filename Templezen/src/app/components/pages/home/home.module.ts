import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CountdownModule } from "ng2-countdown-timer";

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { AboutTextComponent } from './about-text/about-text.component';
import { RecentEventsComponent } from './recent-events/recent-events.component';
import { RecentSermonComponent } from './recent-sermon/recent-sermon.component';
import { VideoComponent } from './video/video.component';
import { BlogsComponent } from './blogs/blogs.component';
import { LatestSermonComponent } from './latest-sermon/latest-sermon.component';
import { QuotesComponent } from './quotes/quotes.component';
import { DonationComponent } from './donation/donation.component';
import { HistoryComponent } from './history/history.component';
import { UpcomingEventComponent } from './upcoming-event/upcoming-event.component';
import { InstagramComponent } from './instagram/instagram.component';


@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    AboutTextComponent,
    RecentEventsComponent,
    RecentSermonComponent,
    VideoComponent,
    BlogsComponent,
    LatestSermonComponent,
    QuotesComponent,
    DonationComponent,
    HistoryComponent,
    UpcomingEventComponent,
    InstagramComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    SlickCarouselModule,
    NgbModule,
    CountdownModule,
    CarouselModule
  ]
})
export class HomeModule { }
