import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { ProjectsComponent } from './pages/projects-page/projects-page.component';
import { KiesraadComponent } from './components/kiesraad/kiesraad.component';

const routes: Routes = [
  {
    path: 'kiesraad',
    component: KiesraadComponent
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
