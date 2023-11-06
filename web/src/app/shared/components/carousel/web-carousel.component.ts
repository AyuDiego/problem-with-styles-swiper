import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
 
@Component({
  selector: 'web-carousel',
  templateUrl: './web-carousel.component.html', 
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CarouselComponent implements OnInit {
  myScriptElement: HTMLScriptElement;
  @HostBinding('class') className = 'p-0';

  constructor() {
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "../../../assets/js/carousel.js";
    this.myScriptElement.type = "text/javascript";
    document.body.appendChild(this.myScriptElement);

    

  }
   

  async ngOnInit(): Promise<void> {
    
  }
}
