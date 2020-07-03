import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCategoryComponent,
    ProductListComponent,
    AddProductComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
