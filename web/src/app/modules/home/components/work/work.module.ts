import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { WorkRoutingModule } from './work-routing.module';
import { WorkComponent } from './work.component';
import { SharedModule } from 'src/app/shared/shared.module';

const ANGULAR_MODULES = [CommonModule];
@NgModule({
  declarations: [WorkComponent],
  imports: [
    ...ANGULAR_MODULES,
    HttpClientModule,
    WorkRoutingModule,
    SharedModule,
  ],
  exports: [WorkComponent],
  providers: [],
})
export class WorkModule {}
