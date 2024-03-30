import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { WorkComponent } from './components/work/work.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './pages/home-page/home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        HomeRoutingModule,
        FormsModule,
        HomeComponent,
        WorkComponent,
        AboutComponent
    ]
})
export class HomeModule { }
