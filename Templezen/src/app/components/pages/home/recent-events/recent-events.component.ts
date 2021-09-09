import { Component } from '@angular/core';
import { EventHelperService } from 'src/app/components/helper/event-helper.service';

@Component({
  selector: 'app-recent-events',
  templateUrl: './recent-events.component.html',
  styleUrls: ['./recent-events.component.css']
})
export class RecentEventsComponent extends EventHelperService {
  settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2500,
    dots: false,
    arrows: true,
    prevArrow: '.sj-left-arrow',
    nextArrow: '.sj-right-arrow',
    vertical: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  }
}
