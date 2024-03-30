import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpComponent } from './pages/exp-page/exp-page.component';
 
  
 
const routes: Routes = [
  {
    path: '',
    component: ExpComponent
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpRoutingModule {}
