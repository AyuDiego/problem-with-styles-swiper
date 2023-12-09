import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './modules/main/pages/main/main-page.component';
import { ProjectsComponent } from './modules/projects/pages/projects-page/projects-page.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    loadChildren: () =>
      import('./modules/main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    loadChildren: () =>
      import('./modules/projects/projects.module').then((m) => m.ProjectsModule),
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
