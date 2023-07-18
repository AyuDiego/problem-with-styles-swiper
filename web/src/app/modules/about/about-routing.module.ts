import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 import { AboutHomeRouteComponent } from './routes/about-home-route/about-home-route.component';
 
const routes: Routes = [
  {
    path: 'about',
    component: AboutHomeRouteComponent
  },
  {
    path: '**',
    redirectTo: 'about'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectionsHomeRoutingModule {}
