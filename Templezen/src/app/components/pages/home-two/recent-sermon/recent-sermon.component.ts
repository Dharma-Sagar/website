import { Component } from '@angular/core';
import { SermonHelperService } from 'src/app/components/helper/sermon-helper.service';

@Component({
  selector: 'app-recent-sermon',
  templateUrl: './recent-sermon.component.html',
  styleUrls: ['./recent-sermon.component.css']
})
export class RecentSermonComponent extends SermonHelperService {

} 
