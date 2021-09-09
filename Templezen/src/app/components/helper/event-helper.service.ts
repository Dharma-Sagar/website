import { Injectable, AfterContentInit, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import authors from '../data/author.json';
import event from '../data/event/event.json';

@Injectable({
  providedIn: 'root'
})
export class EventHelperService implements AfterContentInit, OnInit {

  // pagination
  page: number = 1;
  public eventpost = event;
  public eventdetails = event;
  public author = authors;
  constructor(private route: ActivatedRoute) { }
  public getDateInitial(string: string) {
    var names = string.split(' '),
      initials = '<span>' + names[0].substring(0, 2) + '</span>';

    if (names.length > 2) {
      initials += names[names.length - 2].substring(0, 3).toUpperCase();
    }
    return initials;
  };
  // Author
  public getAuthor(items: string | any[]) {
    var elems = authors.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // Recent post
  public changeToMonth(month: string | number | any) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[month];
  }

  public setDemoDate() {
    var today = new Date();
    this.eventpost.slice(0, 4).map((post: { timestamp: number; date: string; }) => (
      post.timestamp = today.getTime() - (3 * 24 * 60 * 60 * 1000),
      // Remove this date on your live demo. This is only used for preview purposed. Your date should actually be updated
      // in the event.json object
      post.date = `${today.getDate() - 2} ${this.changeToMonth(today.getMonth())}, ${today.getFullYear()}`
    ));
  }

  public getRecentPost() {
    var elems = event.filter((post: { timestamp: number | any; date: string | number | Date; }) => {
      return post.timestamp < new Date(post.date);
    });
    return elems;
  }
  // Post Details
  public setevent(id: any) {
    this.eventdetails = event.filter((item: { id: any; }) => { return item.id == id });
  }
  ngAfterContentInit(): void {
    this.setevent(this.route.snapshot.params.id);
  }
  ngOnInit(): void {
    this.setDemoDate();
  }
  // Social Share
  public pageUrl = window.location.href;
  public socialShare(title: string) {
    var socialIcons = [
      {
        title: "facebook",
        iconClass: "fab fa-facebook-f",
        link: "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(this.pageUrl) + ""
      },
      {
        title: "twitter",
        iconClass: "fab fa-twitter",
        link: "http://twitter.com/intent/tweet?text=" + encodeURIComponent(title) + "&" + encodeURIComponent(this.pageUrl) + ""
      },
      {
        title: "linkedin",
        iconClass: "fab fa-linkedin-in",
        link: "https://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(this.pageUrl) + "&title=" + encodeURIComponent(title) + ""
      },
      {
        title: "pinterest",
        iconClass: "fab fa-pinterest-p",
        link: "http://pinterest.com/pin/create/button/?url=" + encodeURIComponent(this.pageUrl) + ""
      }
    ];
    return socialIcons;
  }
  openSocialPopup(social: any) {
    window.open(social.link, "MsgWindow", "width=600,height=600")
  }
}
