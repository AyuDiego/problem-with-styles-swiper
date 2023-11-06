import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  }, 
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
