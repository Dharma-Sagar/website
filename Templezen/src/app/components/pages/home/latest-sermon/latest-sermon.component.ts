import { Component } from '@angular/core';
import { SermonHelperService } from 'src/app/components/helper/sermon-helper.service';

@Component({
  selector: 'app-latest-sermon',
  templateUrl: './latest-sermon.component.html',
  styleUrls: ['./latest-sermon.component.css']
})
export class LatestSermonComponent extends SermonHelperService {

}
