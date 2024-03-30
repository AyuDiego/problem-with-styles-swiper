import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './pages/contact-page/contact-page.component';
  
const ANGULAR_MODULES = [CommonModule, FormsModule];
@NgModule({
    imports: [
        ...ANGULAR_MODULES,
        HttpClientModule,
        ContactRoutingModule,
        ContactComponent,
    ],
    exports: [ContactComponent],
    providers: [],
})
export class ContactModule {}