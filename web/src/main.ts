
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { AppRoutingModule, appRoutes } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ScriptLoaderService } from './app/core/services/script-loader.service'; 
import { register as registerSwiperElements } from 'swiper/element/bundle'; 

const SHARED_MODULES = [
  RouterModule.forRoot(appRoutes, {
    paramsInheritanceStrategy: 'always',
    onSameUrlNavigation: 'ignore',
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    enableViewTransitions: true
  }), 
]; 

registerSwiperElements();
bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, AppRoutingModule, ...SHARED_MODULES,  NgbModule),
        ScriptLoaderService, { provide: LocationStrategy, useClass: PathLocationStrategy },
        provideHttpClient(withInterceptorsFromDi()),
    ]
})
  .catch(err => console.error(err));
  
 