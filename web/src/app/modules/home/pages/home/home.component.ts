import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'web-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  @HostBinding('class') className = 'flex-container';

  constructor() {}

  ngOnInit(): void {}
}
