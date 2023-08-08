import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, appRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainPageComponent } from './modules/home/pages/main/main.page';
import { HomeModule } from './modules/home/home.module';

const SHARED_MODULES = [RouterModule.forRoot(appRoutes,  {
  paramsInheritanceStrategy: 'always',
  onSameUrlNavigation: 'ignore',
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled', 
})];

@NgModule({
  declarations: [AppComponent, MainPageComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ...SHARED_MODULES,
    SharedModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
