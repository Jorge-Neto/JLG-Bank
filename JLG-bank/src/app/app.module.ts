import HttpClient from '../plugins/axios';
import { ContentRoutingModule } from './content/content.routing.module';
import { ContentModule } from './content/content.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ContentModule,
    ContentRoutingModule,

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
