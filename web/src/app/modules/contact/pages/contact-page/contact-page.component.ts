import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'web-contact',
    templateUrl: './contact-page.component.html',
    standalone: true,
})
export class ContactComponent implements OnInit {
  @HostBinding('class') className = 'flex-container flex-container--page';
  @HostBinding('id') id = 'contact';

  constructor() {}

  ngOnInit() {}
}
