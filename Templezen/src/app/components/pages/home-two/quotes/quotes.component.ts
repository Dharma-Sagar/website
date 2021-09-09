import { Component, OnInit } from '@angular/core';
import data from "../../../data/quotes.json";

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  public quotes = data;
  constructor() { }

  ngOnInit(): void {
  }

}
