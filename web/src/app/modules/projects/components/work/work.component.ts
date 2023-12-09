import {
  AfterViewInit,
  Component,
  HostBinding,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ScriptLoaderService } from 'src/app/core/services/script-loader.service';

@Component({
  selector: 'web-work',
  templateUrl: './work.component.html',
})
export class WorkComponent implements OnInit, OnDestroy, AfterViewInit {
  @HostBinding('class') className = 'flex-container padding-top-82';
  @HostBinding('id') id = 'work';
  constructor(private scriptLoader: ScriptLoaderService) {}

  ngAfterViewInit() {
    this.scriptLoader.load('assets/js/carousel.js').then(() => {
      (window as any).myCarouselFunction();
    });
  }
  
  ngOnInit() {
    console.log('WorkComponent ngOnInit');
  }

  ngOnDestroy() {
    console.log('WorkComponent ngOnInit');
  }
}
