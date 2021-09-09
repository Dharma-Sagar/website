import { Component } from '@angular/core';
import { EventHelperService } from 'src/app/components/helper/event-helper.service';

@Component({
  selector: 'app-upcoming-event',
  templateUrl: './upcoming-event.component.html',
  styleUrls: ['./upcoming-event.component.css']
})
export class UpcomingEventComponent extends EventHelperService {
  text:any = {
    Days: "Days",
    Hours: "Hours",
    Minutes: "Minutes",
    Seconds: "Seconds"
  };
}
