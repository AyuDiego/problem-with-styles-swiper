import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule, routes } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RouterModule } from '@angular/router';
import { WorkModule } from './components/work/work.module';
import { AboutModule } from './components/about/about.module';

const SHARED_MODULES = [
  HomeRoutingModule,
  SharedModule,
  WorkModule,
  AboutModule,
];

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ...SHARED_MODULES],
  exports: [HomeComponent],
})
export class HomeModule {}
