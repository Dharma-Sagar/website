import { Component } from '@angular/core';
import { BlogHelperService } from 'src/app/components/helper/blog-helper.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent extends BlogHelperService {
  settings: OwlOptions = {
    autoplay: false,
    lazyLoad: true,
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    autoHeight: true,
    autoplayTimeout: 3000,
    smartSpeed: 800,
    responsive: {
      0: {
        items: 1
      },

      600: {
        items: 2
      },

      1024: {
        items: 3
      },

      1366: {
        items: 3
      }
    }
  }
}
