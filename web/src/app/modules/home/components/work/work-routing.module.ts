import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkComponent } from './work.component';
import { appRoutes } from 'src/app/app-routing.module';
 
  
 
const routes: Routes = [
  {
    path: '',
    component: WorkComponent
  },
  {
    path: '**',
    redirectTo: 'work'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkRoutingModule {}
