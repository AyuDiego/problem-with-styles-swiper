import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  myScriptElement: HTMLScriptElement;
  constructor() {
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "../../../assets/js/carousel.js";
    this.myScriptElement.type = "text/javascript";
    document.body.appendChild(this.myScriptElement);
    console.log(environment.production); // Logs false for development environment
  }

  title = 'web';
  
}
