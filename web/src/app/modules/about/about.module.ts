import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';




const ANGULAR_MODULES = [CommonModule, FormsModule];
// const ROUTES = [];
// const SHARED_MODULES = [];
// const PRIME_NG = [ 
// ];

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    ...ANGULAR_MODULES,
  ],
  providers: []
})
export class AboutModule {
}
