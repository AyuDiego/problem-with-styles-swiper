import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'web-navbar',
  templateUrl: './web-navbar.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class NavBarComponent implements OnInit {
  constructor() {}
  
  // @HostListener('window:scroll', [])
  // onWindowScroll(): void {
  //   const offset = this.window.scrollY || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;

  //   if (offset > 50) {
  //     this.isNavbarShow = true;
  //   } else {
  //     this.isNavbarShow = false;
  //   }
  // }
  async ngOnInit(): Promise<void> {}
}
