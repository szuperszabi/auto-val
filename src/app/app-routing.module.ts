import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {CarsComponent} from './cars/cars.component';
import {BlogComponent} from './blog/blog.component';

const routes: Routes = [
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'cars', component: CarsComponent
  },
  {
    path: 'blog', component: BlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
