import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { WorkRoutingModule } from './work-routing.module';
import { WorkComponent } from './work.component';




const ANGULAR_MODULES = [CommonModule, FormsModule]; 
@NgModule({
  declarations: [WorkComponent],
  imports: [
    HttpClientModule,
    WorkRoutingModule,
    ...ANGULAR_MODULES,
  ],
  exports: [WorkComponent],
  providers: []
})
export class WorkModule {
}
