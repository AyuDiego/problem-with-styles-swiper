import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule, routes } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RouterModule } from '@angular/router';
import { WorkModule } from './components/work/work.module';
import { AboutModule } from './components/about/about.module';
import { SkillsModule } from './components/skills/skills.module';
import { ReactiveFormsModule } from '@angular/forms';

const SHARED_MODULES = [
  HomeRoutingModule,
  WorkModule,
  AboutModule,
  SkillsModule,
  SharedModule,
];

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule,ReactiveFormsModule, RouterModule.forChild(routes), ...SHARED_MODULES],
  exports: [HomeComponent, ReactiveFormsModule, SharedModule],
})
export class HomeModule {}
