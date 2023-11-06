import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills.component';
 
  
 
const routes: Routes = [
  {
    path: '',
    component: SkillsComponent
  },
  {
    path: '',
    redirectTo: 'work'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule {}
