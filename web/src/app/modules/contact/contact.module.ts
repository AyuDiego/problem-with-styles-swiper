import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './pages/contact-page/contact-page.component';
  
const ANGULAR_MODULES = [CommonModule, FormsModule];
@NgModule({
  declarations: [ContactComponent],
  imports: [
    ...ANGULAR_MODULES, 
    HttpClientModule,
    ContactRoutingModule,
  ],
  exports: [ContactComponent],
  providers: [],
})
export class ContactModule {}