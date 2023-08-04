import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'web-about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {
  @HostBinding('class') className = 'flex-container flex-container--page padding-top-82';
  @HostBinding('id') id = 'about';


  constructor() {}

  ngOnInit(): void {}
}
