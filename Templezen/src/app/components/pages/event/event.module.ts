import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './event.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    EventComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule
  ]
})
export class EventModule { }
