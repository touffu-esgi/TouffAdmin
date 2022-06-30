import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectionPageComponent } from './connection-page/connection-page.component';
import { FooterComponent } from './footer/footer.component';
import {FooterAboutComponent} from "./footer/footer-about/footer-about.component";
import {FooterFollowUsComponent} from "./footer/footer-follow-us/footer-follow-us.component";
import { HeaderComponent } from './header/header.component';
import {HeaderActionsComponent} from "./header/header-actions/header-actions.component";
import {HeaderIconComponent} from "./header/header-icon/header-icon.component";
import { UserListPageComponent } from './user-list-page/user-list-page.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ConnectionPageComponent,
    FooterComponent,
    FooterAboutComponent,
    FooterFollowUsComponent,
    HeaderComponent,
    HeaderActionsComponent,
    HeaderIconComponent,
    UserListPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
