import { Injectable, AfterContentInit, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import authors from '../data/author.json';
import sermontags from '../data/tags.json';
import sermon from '../data/sermon/sermon.json';

@Injectable({
  providedIn: 'root'
})
export class SermonHelperService implements AfterContentInit, OnInit {
  // pagination
  page: number = 1;
  public sermonpost = sermon;
  public sermondetails = sermon;
  public tags = sermontags;
  public sermontags = sermontags;
  public author = authors;
  constructor(private route: ActivatedRoute) {}
  // Tags
  public getTags(items: string | any[]) {
    var elems = sermontags.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  } 
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
    this.sermonpost.slice(0, 4).map((post: { timestamp: number; postdate: string; }) => (
      post.timestamp = today.getTime() - (3 * 24 * 60 * 60 * 1000),
      // Remove this date on your live demo. This is only used for preview purposed. Your date should actually be updated
      // in the sermon.json object
      post.postdate = `${this.changeToMonth(today.getMonth())} ${today.getDate() - 2}, ${today.getFullYear()}`
    ));
  }

  public getRecentPost() {
    var elems = sermon.filter((post: { timestamp: number | any; postdate: string | number | Date; }) => {
      return post.timestamp < new Date(post.postdate);
    });
    return elems;
  }
  // Filter
  // Tag Filter
  public setTag(id: any) {
    this.sermontags = id;
  }
  public getTag() {
    return this.sermontags;
  }
  public getPostsByTags(tagId: string) {
    return this.sermonpost = sermon.filter((item: { tags: number[]; }) => { return item.tags.includes(parseInt(tagId)) });
  }
  // Author Filter
  public setAuthor(id: any) {
    this.author = id;
  }
  public getAuthorPost() {
    return this.author;
  }
  public getPostsByAuthors(authorId: string) {
    return this.sermonpost = sermon.filter((item: { author: number[]; }) => { return item.author.includes(parseInt(authorId)) });
  }
  // Fetch All filter
  public setPosts() {
    var postsByTags = this.getTag() != undefined ? this.getPostsByTags(this.getTag()) : '';
    var postsByAuthor = this.getAuthorPost() != undefined ? this.getPostsByAuthors(this.getAuthorPost()) : '';

    if ((postsByTags != '' || postsByTags != undefined || postsByTags != null) && postsByTags.length > 0) {
      this.sermonpost = postsByTags;
    } else if ((postsByAuthor != '' || postsByAuthor != undefined || postsByAuthor != null) && postsByAuthor.length > 0) {
      this.sermonpost = postsByAuthor;
    } 
  }
  // Post Details
  public setSermon(id: any) {
    this.sermondetails = sermon.filter((item: { id: any; }) => { return item.id == id });
  }
  ngAfterContentInit(): void {
    this.setTag(this.route.snapshot.params.tagId);
    this.setAuthor(this.route.snapshot.params.authorId);
    this.setPosts();
    this.setSermon(this.route.snapshot.params.id);
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
  openSocialPopup(social: any){
    window.open(social.link, "MsgWindow", "width=600,height=600")
  }
}
