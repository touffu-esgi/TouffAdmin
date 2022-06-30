import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectionPageComponent } from './connection-page/connection-page.component';
import { FooterComponent } from './footer/footer.component';
import {FooterAboutComponent} from "./footer/footer-about/footer-about.component";
import {FooterFollowUsComponent} from "./footer/footer-follow-us/footer-follow-us.component";

@NgModule({
  declarations: [
    AppComponent,
    ConnectionPageComponent,
    FooterComponent,
    FooterAboutComponent,
    FooterFollowUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
