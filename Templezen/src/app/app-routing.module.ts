import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Home
  { path: '', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule), data: { breadcrumb: "Homepage" } },
  { path: 'home-v2', loadChildren: () => import('./components/pages/home-two/home-two.module').then(m => m.HomeTwoModule), data: { breadcrumb: "Homepage" } },
  // Sermon
  { path: 'sermon/tag/:tagId', loadChildren: () => import('./components/pages/sermon/sermon.module').then(m => m.SermonModule), data: { breadcrumb: "Sermon" } },
  { path: 'sermon/author/:authorId', loadChildren: () => import('./components/pages/sermon/sermon.module').then(m => m.SermonModule), data: { breadcrumb: "Sermon" } },
  { path: 'sermon', loadChildren: () => import('./components/pages/sermon/sermon.module').then(m => m.SermonModule), data: { breadcrumb: "Sermon" } },
  { path: 'sermon-details/:id', loadChildren: () => import('./components/pages/sermon-details/sermon-details.module').then(m => m.SermonDetailsModule), data: { breadcrumb: "Sermon Details" } },
  // Event
  { path: 'event', loadChildren: () => import('./components/pages/event/event.module').then(m => m.EventModule), data: { breadcrumb: "Event" } },
  { path: 'event-details/:id', loadChildren: () => import('./components/pages/event-details/event-details.module').then(m => m.EventDetailsModule), data: { breadcrumb: "Event Details" } },
  // Pages
  { path: 'about', loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule), data: { breadcrumb: "About Us" } },
  { path: 'contact', loadChildren: () => import('./components/pages/contact/contact.module').then(m => m.ContactModule), data: { breadcrumb: "Contact Us" } },
  { path: 'login', loadChildren: () => import('./components/pages/login/login.module').then(m => m.LoginModule), data: { breadcrumb: "Login" } },
  { path: 'register', loadChildren: () => import('./components/pages/register/register.module').then(m => m.RegisterModule), data: { breadcrumb: "Register" } },
  { path: 'donation', loadChildren: () => import('./components/pages/donation/donation.module').then(m => m.DonationModule), data: { breadcrumb: "Donation" } },
  { path: 'team-details/:id', loadChildren: () => import('./components/pages/team-details/team-details.module').then(m => m.TeamDetailsModule), data: { breadcrumb: "Our Teacher" } },
  // Shop
  { path: 'shop/cat/:catId', loadChildren: () => import('./components/pages/shop/shop.module').then(m => m.ShopModule), data: { breadcrumb: "Shop" } },
  { path: 'shop/tag/:tagId', loadChildren: () => import('./components/pages/shop/shop.module').then(m => m.ShopModule), data: { breadcrumb: "Shop" } },
  { path: 'shop/search/:query', loadChildren: () => import('./components/pages/shop/shop.module').then(m => m.ShopModule), data: { breadcrumb: "Shop" } },
  { path: 'shop/:minPrice/:maxPrice', loadChildren: () => import('./components/pages/shop/shop.module').then(m => m.ShopModule), data: { breadcrumb: "Shop" } },
  { path: 'shop', loadChildren: () => import('./components/pages/shop/shop.module').then(m => m.ShopModule), data: { breadcrumb: "Shop" } },
  { path: 'shop-left', loadChildren: () => import('./components/pages/shop-left/shop-left.module').then(m => m.ShopLeftModule), data: { breadcrumb: "Shop Left" } },
  { path: 'shop-right', loadChildren: () => import('./components/pages/shop-right/shop-right.module').then(m => m.ShopRightModule), data: { breadcrumb: "Shop Right" } },
  { path: 'shop-details/:id', loadChildren: () => import('./components/pages/shop-details/shop-details.module').then(m => m.ShopDetailsModule), data: { breadcrumb: "Shop Details" } },
  { path: 'cart', loadChildren: () => import('./components/pages/cart/cart.module').then(m => m.CartModule), data: { breadcrumb: "Cart" } },
  { path: 'checkout', loadChildren: () => import('./components/pages/checkout/checkout.module').then(m => m.CheckoutModule), data: { breadcrumb: "Checkout" } },
  // Blog
  { path: 'blog/cat/:catId', loadChildren: () => import('./components/pages/blog/blog.module').then(m => m.BlogModule), data: { breadcrumb: "Blog" } },
  { path: 'blog/tag/:tagId', loadChildren: () => import('./components/pages/blog/blog.module').then(m => m.BlogModule), data: { breadcrumb: "Blog" } },
  { path: 'blog/author/:authorId', loadChildren: () => import('./components/pages/blog/blog.module').then(m => m.BlogModule), data: { breadcrumb: "Blog" } },
  { path: 'blog/search/:query', loadChildren: () => import('./components/pages/blog/blog.module').then(m => m.BlogModule), data: { breadcrumb: "Blog" } },
  { path: 'blog', loadChildren: () => import('./components/pages/blog/blog.module').then(m => m.BlogModule), data: { breadcrumb: "Blog" } },
  { path: 'blog-details/:id', loadChildren: () => import('./components/pages/blog-details/blog-details.module').then(m => m.BlogDetailsModule), data: { breadcrumb: "Blog Details" } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
