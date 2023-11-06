import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { MainPageComponent } from './pages/main/main.page';

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: 'about',
     loadChildren: () =>
          import('./components/about/about.module').then((m) => m.AboutModule),
        
      },
      {
        path: 'work',
        loadChildren: () =>
          import('./components/work/work.module').then((m) => m.WorkModule),
      }, 
      {
      path: 'skills',
      loadChildren: () =>
           import('./components/skills/skills.module').then((m) => m.SkillsModule),
         
       },
       {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',


      }

    ],
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full' 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
