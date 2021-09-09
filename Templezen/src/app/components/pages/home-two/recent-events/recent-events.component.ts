import { Component } from '@angular/core';
import { EventHelperService } from 'src/app/components/helper/event-helper.service';

@Component({
  selector: 'app-recent-events',
  templateUrl: './recent-events.component.html',
  styleUrls: ['./recent-events.component.css']
})
export class RecentEventsComponent extends EventHelperService {
}
