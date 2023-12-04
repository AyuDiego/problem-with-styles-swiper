import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './modules/main/pages/main/main-page.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    loadChildren: () =>
      import('./modules/main/main.module').then((m) => m.MainModule),
  }
];

const routerOptions: ExtraOptions = {
  paramsInheritanceStrategy: 'always',
  onSameUrlNavigation: 'ignore',
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled'   
};

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,  routerOptions),
  ],

  exports: [RouterModule],
})
export class AppRoutingModule {}
