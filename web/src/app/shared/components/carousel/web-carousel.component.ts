import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnInit,
} from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'web-carousel',
    templateUrl: './web-carousel.component.html',
    changeDetection: ChangeDetectionStrategy.Default,
    standalone: true,
    imports: [NgClass],
})
export class CarouselComponent implements OnInit {
  @HostBinding('class') className = 'p-0'; 
  isHideContent = true;
  divs = [];
  constructor() { 

  }

  onImgMouseover(): void {
    this.isHideContent = false;  }

  onImgMouseout(): void {
    this.isHideContent = true;
  }

   ngOnInit(): void {
    this.divs = Array.from(document.querySelectorAll('#actualCards')
    );
    console.log(this.divs);
 
  }


}
