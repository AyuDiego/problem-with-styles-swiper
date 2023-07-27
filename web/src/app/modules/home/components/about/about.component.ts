import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'web-about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {
  @HostBinding('class') className = 'flex-container';

  constructor() {}

  ngOnInit(): void {}
}
