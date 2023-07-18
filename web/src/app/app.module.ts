import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCompComponent } from './modules/contact/new-comp/new-comp.component';
import { NavBarComponent } from './shared/components/web-navbar/web-navbar.component';
import { RouterModule } from '@angular/router';
const SHARED_MODULES = [RouterModule ];
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    NewCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    HttpClientModule,
    SharedModule,
    ...SHARED_MODULES,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
