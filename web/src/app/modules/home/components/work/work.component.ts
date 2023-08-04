import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'web-work',
  templateUrl: './work.component.html',
})
export class WorkComponent {
  @HostBinding('class') className = 'flex-container padding-top-82';
  @HostBinding('id') id = 'work';

}
