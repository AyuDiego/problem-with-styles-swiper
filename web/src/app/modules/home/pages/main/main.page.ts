import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'web-main-page',
  templateUrl: './main.page.html',
})
export class MainPageComponent {
  @HostBinding('class') className = 'flex-container';
  constructor() {}
}
