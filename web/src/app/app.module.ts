import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, appRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';  
import { SharedModule } from './shared/shared.module'; 
import { ScriptLoaderService } from './core/services/script-loader.service';
const SHARED_MODULES = [
  RouterModule.forRoot(appRoutes, {
    paramsInheritanceStrategy: 'always',
    onSameUrlNavigation: 'ignore',
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
  }), 
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    ...SHARED_MODULES,
    NgbModule, 
    
  ],
  providers: [ScriptLoaderService,{ provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [AppComponent],
  exports: [SharedModule],
})
export class AppModule {}
