import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'web-exp',
  templateUrl: './exp-page.component.html',
})
export class ExpComponent implements OnInit {
  @HostBinding('class') className = 'flex-container flex-container--page';
  @HostBinding('id') id = 'exp';

  constructor() {}

  ngOnInit() {}
}
