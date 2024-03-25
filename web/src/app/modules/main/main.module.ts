import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { SharedModule } from 'src/app/shared/shared.module';  
import { MainRoutingModule } from './main-routing.module';  
import { MainPageComponent } from './pages/main/main-page.component';
 
const SHARED_MODULES = [
  SharedModule,  
  MainRoutingModule,  
];

@NgModule({
    imports: [CommonModule, ...SHARED_MODULES, MainPageComponent],
    exports: [],
})
export class MainModule {}


// ReactiveFormsModule  import export RouterModule.forChild(routes)