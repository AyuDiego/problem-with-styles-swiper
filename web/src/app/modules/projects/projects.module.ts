import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { WorkComponent } from './components/work/work.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './pages/projects-page/projects-page.component';

const SHARED_MODULES = [
  SharedModule,  
  ProjectsRoutingModule,  
];
@NgModule({
  declarations: [
    ProjectsComponent,
    WorkComponent,

  ],
  imports: [CommonModule, ...SHARED_MODULES, FormsModule],
 
})
export class ProjectsModule { }
