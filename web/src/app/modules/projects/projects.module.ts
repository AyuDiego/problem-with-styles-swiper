import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './pages/projects-page/projects-page.component';
import { KiesraadComponent } from './components/kiesraad/kiesraad.component';

const SHARED_MODULES = [
  SharedModule,  
  ProjectsRoutingModule,  
];
@NgModule({
    imports: [CommonModule, ...SHARED_MODULES, ProjectsComponent,
        KiesraadComponent],
})
export class ProjectsModule { }
