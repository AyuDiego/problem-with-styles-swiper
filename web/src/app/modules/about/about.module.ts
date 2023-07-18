import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ElectionsHomeRoutingModule } from './about-routing.module';




const ANGULAR_MODULES = [CommonModule, FormsModule];
// const ROUTES = [];
// const SHARED_MODULES = [];
// const PRIME_NG = [ 
// ];

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    ElectionsHomeRoutingModule,
    ...ANGULAR_MODULES,
  ],
  providers: []
})
export class AboutModule {
}
