import { Component, OnInit } from '@angular/core';
import data from "../../../data/instagram.json";

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css']
})
export class InstagramComponent implements OnInit {
  public instagram = data;
  constructor() { }

  ngOnInit(): void {
  }

}
