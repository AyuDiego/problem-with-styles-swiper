import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';
import { calculateRestMultiple100ScrollY } from 'src/app/core/services/number-functions';

@Component({
  selector: 'web-navbar',
  templateUrl: './web-navbar.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [
    { provide: Window, useValue: window },
    { provide: Document, useValue: document },
  ],
})
export class NavBarComponent implements OnInit {
  constructor(private window: Window, private document: Document) {}
  isNavbarFixed: boolean = false;
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const offset =
      this.window.scrollY ||
      this.document.documentElement.scrollTop ||
      this.document.body.scrollTop ||
      0;
    const sizeHeightWindow = this.window.innerHeight; 
    const restMultiple100 = calculateRestMultiple100ScrollY(sizeHeightWindow);
    if (sizeHeightWindow % 100 != 0) { 
      const mainLayoutRouteContent = this.document.querySelector(
        '.main-layout-route-content'
      );
      if (mainLayoutRouteContent) {
        mainLayoutRouteContent.setAttribute(
          'style',
          `margin-top: ${restMultiple100}px`
        );
      }   
    }
    if (offset > sizeHeightWindow - (50 - restMultiple100)) {
      this.isNavbarFixed = true;
      
    } else {
      this.isNavbarFixed = false;
    }
  }
  async ngOnInit(): Promise<void> {}
}



