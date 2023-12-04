import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponent } from './pages/skills-page/skills-page.component';
import { ScriptLoaderService } from 'src/app/core/services/script-loader.service';
  
const ANGULAR_MODULES = [CommonModule, FormsModule];
@NgModule({
  declarations: [SkillsComponent],
  imports: [
    ...ANGULAR_MODULES, 
    HttpClientModule,
    SkillsRoutingModule,
  ],
  exports: [SkillsComponent],
  providers: [],
})
export class SkillsModule {}