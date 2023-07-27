import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { WorkRoutingModule } from './work-routing.module';




const ANGULAR_MODULES = [CommonModule, FormsModule];
// const ROUTES = [];
// const SHARED_MODULES = [];
// const PRIME_NG = [ 
// ];

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    WorkRoutingModule,
    ...ANGULAR_MODULES,
  ],
  providers: []
})
export class WorkModule {
}
