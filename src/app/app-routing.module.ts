import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';


const routes: Routes = [
  {path:'home',component:ProductListComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'contactus',component:ContactUsComponent},
  {path:'productcategory',component:ProductCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
