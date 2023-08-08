import { ViewportScroller } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';

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

    if (offset > 980) {
      this.isNavbarFixed = true;
    } else {
      this.isNavbarFixed = false;
    }
  }
  async ngOnInit(): Promise<void> {}
}
