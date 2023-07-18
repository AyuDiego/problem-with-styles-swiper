import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutModule } from './modules/about/about.module';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: () =>
      import('./modules/about/about.module').then((m) => m.AboutModule)
  },
  {
    path: '**',
    redirectTo: '',
  },
  // work y contact
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { paramsInheritanceStrategy: 'always' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
