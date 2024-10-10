import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Add this import for ngClass, ngIf, etc.

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './pages/header/header.component';
import { HeroComponent } from './pages/hero/hero.component';
import { ServiceComponent } from './pages/service/service.component';
import { CategoryComponent } from './pages/category/category.component';
import { ProductComponent } from './pages/product/product.component';
import { BlogComponent } from './pages/blog/blog.component';
import { NewsletterComponent } from './pages/newsletter/newsletter.component';
import { FooterComponent } from './pages/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    CommonModule,   // Ensure this is added
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    HeroComponent,
    ServiceComponent,
    CategoryComponent,
    ProductComponent,
    BlogComponent,
    NewsletterComponent,
    FooterComponent,
    IonicModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
