import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { CategoryComponent } from './pages/category/category.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { HeroComponent } from './pages/hero/hero.component';
import { NewsletterComponent } from './pages/newsletter/newsletter.component';
import { ProductComponent } from './pages/product/product.component';
import { ServiceComponent } from './pages/service/service.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'hero', component: HeroComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'product', component: ProductComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'newsletter', component: NewsletterComponent },
  { path: 'footer', component: FooterComponent },
  { path: '', redirectTo: '/hero', pathMatch: 'full' },  // Default route
  { path: '**', redirectTo: '/hero' },  // Wildcard route for 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
