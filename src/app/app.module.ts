import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { obj } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CareerComponent } from './career/career.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { NevigationComponent } from './nevigation/nevigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CareerComponent,
    ProductsComponent,
    ContactComponent,
    NevigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    obj
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
