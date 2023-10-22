import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponent} from './skills.component';
 
// const PRIME_NG_MODULES = [
// ];
const ANGULAR_MODULES = [CommonModule, FormsModule];
@NgModule({
  declarations: [SkillsComponent],
  imports: [
    HttpClientModule,
    SkillsRoutingModule,
    ...ANGULAR_MODULES,
    // ...PRIME_NG_MODULES,
  ],
  exports: [SkillsComponent],
  providers: [],
})
export class SkillsModule {}