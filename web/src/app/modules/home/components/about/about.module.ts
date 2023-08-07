import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AboutRoutingModule } from './about-routing.module'; 
import { AboutComponent } from './about.component';




const ANGULAR_MODULES = [CommonModule, FormsModule];
@NgModule({
  declarations: [AboutComponent],
  imports: [ 
    HttpClientModule,
    AboutRoutingModule,
    ...ANGULAR_MODULES,
  ],
  exports: [AboutComponent],
  providers: []
})
export class AboutModule {
}
