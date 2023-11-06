import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, appRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LocationStrategy } from '@angular/common';
import { HashLocationStrategy } from '@angular/common';
import { MainPageComponent } from './modules/home/pages/main/main.page';
import { HomeModule } from './modules/home/home.module';
import { SharedModule } from './shared/shared.module';

const SHARED_MODULES = [
  RouterModule.forRoot(appRoutes, {
    paramsInheritanceStrategy: 'always',
    onSameUrlNavigation: 'ignore',
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
  }),
  SharedModule,
];

@NgModule({
  declarations: [AppComponent, MainPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    ...SHARED_MODULES,
    NgbModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
