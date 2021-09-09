import { Component, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import author from '../../../data/author.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements AfterContentInit {

  public authordetails = author;
  constructor(private route: ActivatedRoute) {}
  public setAuthor(id: any) {
    this.authordetails = author.filter((item: { id: any; }) => { return item.id == id });
  }
  ngAfterContentInit(): void {
    this.setAuthor(this.route.snapshot.params.id);
  }

} 
