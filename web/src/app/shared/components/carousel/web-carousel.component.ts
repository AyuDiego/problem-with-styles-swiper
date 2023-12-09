import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'web-carousel',
  templateUrl: './web-carousel.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CarouselComponent implements OnInit {
  @HostBinding('class') className = 'p-0'; 
  isHideContent = false;
  
  constructor() { 
  }
 


  async ngOnInit(): Promise<void> {}
}
