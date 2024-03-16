import {
  AfterViewInit,
  Component,
  HostBinding,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ScriptLoaderService } from 'src/app/core/services/script-loader.service';
import { CarouselComponent } from '../../../../shared/components/carousel/web-carousel.component';

@Component({
    selector: 'web-work',
    templateUrl: './work.component.html',
    standalone: true,
    imports: [CarouselComponent],
})
export class WorkComponent implements OnInit, OnDestroy, AfterViewInit {
  @HostBinding('class') className = 'flex-container padding-top-82';
  @HostBinding('id') id = 'work';
  constructor(private scriptLoader: ScriptLoaderService) {}

  ngAfterViewInit() { 
  
  }
  
  ngOnInit() {
    console.log('WorkComponent ngOnInit');
  }

  ngOnDestroy() {
    console.log('WorkComponent ngOnInit');
  }
}
