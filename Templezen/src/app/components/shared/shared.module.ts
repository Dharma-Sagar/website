import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'angular-crumbs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SermonSidebarComponent } from './sermon-sidebar/sermon-sidebar.component';
import { ShopSidebarComponent } from './shop-sidebar/shop-sidebar.component';
import { BlogSidebarComponent } from './blog-sidebar/blog-sidebar.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    SermonSidebarComponent,
    ShopSidebarComponent,
    BlogSidebarComponent,
    MobileMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    BreadcrumbModule,
    FormsModule,
    SlickCarouselModule,
    NgxSliderModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    SermonSidebarComponent,
    ShopSidebarComponent,
    BlogSidebarComponent
  ]
})
export class SharedModule { }
