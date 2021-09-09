import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { SharedModule } from '../../shared/shared.module';
import { AboutTextComponent } from './about-text/about-text.component';
import { TeamComponent } from './team/team.component';
import { VideoComponent } from './video/video.component';


@NgModule({
  declarations: [
    AboutComponent,
    AboutTextComponent,
    TeamComponent,
    VideoComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule,
    NgbModule,
    CarouselModule
  ]
})
export class AboutModule { }
