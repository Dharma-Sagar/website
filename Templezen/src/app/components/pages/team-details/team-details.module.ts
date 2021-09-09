import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamDetailsRoutingModule } from './team-details-routing.module';
import { TeamDetailsComponent } from './team-details.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    TeamDetailsComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    TeamDetailsRoutingModule,
    SharedModule
  ]
})
export class TeamDetailsModule { }
