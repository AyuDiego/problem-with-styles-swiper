import {  CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RouterOutlet } from '@angular/router';   
 
import { register } from 'swiper/element/bundle'; 
import { CommonModule } from '@angular/common';
register();

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [CommonModule, RouterOutlet],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {  
  constructor( ) { 
    console.log(environment.production); // Logs false for development environment
  } 
 
  title = 'web';
  
}
