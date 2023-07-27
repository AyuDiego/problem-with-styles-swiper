import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  // work y contact
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { paramsInheritanceStrategy: 'always' }),
  ],
  // imports: [
  //   RouterModule.forRoot(routes, { paramsInheritanceStrategy: 'always', onSameUrlNavigation: "ignore",
  //   anchorScrolling:'enabled',
  //   scrollPositionRestoration: 'enabled' }),
  // ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
