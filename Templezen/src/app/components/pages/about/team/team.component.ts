import { Component, OnInit } from '@angular/core';
import data from "../../../data/author.json";
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  public author = data;
  constructor() { }
  settings: OwlOptions = {
    autoplay: true,
    lazyLoad: true,
    loop: true,
    margin: 20,
    dots: false,
    autoHeight: true,
    autoplayTimeout: 2000,
    smartSpeed: 800,
    nav: true,
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
        items: 4
      }
    }
  }

  ngOnInit(): void {
  }

}
