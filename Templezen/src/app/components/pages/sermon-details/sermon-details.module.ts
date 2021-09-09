import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SermonDetailsRoutingModule } from './sermon-details-routing.module';
import { SermonDetailsComponent } from './sermon-details.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    SermonDetailsComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    SermonDetailsRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class SermonDetailsModule { }
