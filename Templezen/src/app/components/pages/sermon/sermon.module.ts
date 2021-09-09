import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { SermonRoutingModule } from './sermon-routing.module';
import { SermonComponent } from './sermon.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    SermonComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    SermonRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule
  ]
})
export class SermonModule { }
