import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutModule } from './modules/about/about.module';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: async (): Promise<typeof AboutModule> =>
      (await import('./modules/about/about.module')).AboutModule
  }
  // work y contact
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
