import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WorkRoutingModule } from './work-routing.module';
import { WorkComponent } from './work.component';
import { PhotoService } from 'src/app/services/photoservice';

import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button'; 
import { RippleModule } from 'primeng/ripple'; 
import { FocusTrapModule } from 'primeng/focustrap';
 
const PRIME_NG_MODULES = [
  GalleriaModule,
  ButtonModule,   
  RippleModule,  
  FocusTrapModule,
];
const ANGULAR_MODULES = [CommonModule, FormsModule];
@NgModule({
  declarations: [WorkComponent],
  imports: [
    HttpClientModule,
    WorkRoutingModule,
    ...ANGULAR_MODULES,
    ...PRIME_NG_MODULES,
  ],
  exports: [WorkComponent],
  providers: [PhotoService],
})
export class WorkModule {}