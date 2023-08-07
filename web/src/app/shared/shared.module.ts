import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { TooltipModule } from 'primeng/tooltip';
import { NavBarComponent } from './components/web-navbar/web-navbar.component';
import { MainPanelComponent } from './components/main-panel/web-main-panel.component';
import { ParallaxItemDirective } from './directives/parallax-item.directive';
import { HttpClientModule } from '@angular/common/http'; 
 

const PRIME_NG_MODULES = [
  ButtonModule,
  SplitButtonModule,
  TooltipModule,
  BadgeModule,
  MenuModule,
  TieredMenuModule,
  ProgressSpinnerModule
];
// const SHARED_MODULES = [];

@NgModule({
  declarations: [ NavBarComponent, MainPanelComponent, ParallaxItemDirective],
  exports: [ NavBarComponent, MainPanelComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule,
    ...PRIME_NG_MODULES,
  ]
})
export class SharedModule {}
