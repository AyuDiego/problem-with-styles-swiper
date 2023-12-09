import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'skills',
    loadChildren: () =>
      import('../skills/skills.module').then((m) => m.SkillsModule),
  },  {
    path: 'experience',
    loadChildren: () =>
      import('../exp/exp.module').then((m) => m.ExpModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('../contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
