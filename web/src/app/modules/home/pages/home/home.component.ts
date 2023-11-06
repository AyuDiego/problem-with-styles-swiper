import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'web-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit { 
  activatedUrl!: string;
  myScriptElement: HTMLScriptElement;

 
  constructor(private route: ActivatedRoute) {
    this.route.fragment.subscribe((fragment: string | null) => {
      this.activatedUrl = fragment || '';
      console.log(this.activatedUrl);
    });
    //quizas crear un servicio  algo asi y llamar a esto para cargar el js del carousel o 
    // igual con la carga de las imagenes de otra forma se soluciona
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "../../../assets/js/carousel.js";
    this.myScriptElement.type = "text/javascript";
    document.body.appendChild(this.myScriptElement);
  }

  ngOnInit(): void {}
}
