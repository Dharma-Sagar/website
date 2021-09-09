import { Component, OnInit } from '@angular/core';
import data from "../../../data/quotes.json";
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  public quotes = data;
  constructor() { }
  settings: OwlOptions = {
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 }
    }
  }
  ngOnInit(): void {
  }

}
