import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCompComponent } from './modules/contact/new-comp/new-comp.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const SHARED_MODULES = [RouterModule];

@NgModule({
  declarations: [AppComponent, NewCompComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    SharedModule,
    ...SHARED_MODULES,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
