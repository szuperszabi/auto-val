import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatChipsModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { ProductComponent } from './product/product.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchComponent,
    ListComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      HttpClientModule,
      FormsModule,
      CommonModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      MatSelectModule,
      MatInputModule,
      MatButtonModule,
      MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
