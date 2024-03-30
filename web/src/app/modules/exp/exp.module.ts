import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ExpComponent } from './pages/exp-page/exp-page.component';
import { ExpRoutingModule } from './exp-routing.module';
  
const ANGULAR_MODULES = [CommonModule, FormsModule];
@NgModule({
    imports: [
        ...ANGULAR_MODULES,
        HttpClientModule,
        ExpRoutingModule,
        ExpComponent,
    ],
    exports: [ExpComponent],
    providers: [],
})
export class ExpModule {}