import {
  Component,
  HostBinding,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'web-work',
  templateUrl: './work.component.html',
})
export class WorkComponent implements OnInit, OnDestroy {
  @HostBinding('class') className = 'flex-container padding-top-82';
  @HostBinding('id') id = 'work';

  constructor() {}

  ngOnInit() {
    console.log('WorkComponent ngOnInit');
  }

  ngOnDestroy() {
    console.log('WorkComponent ngOnInit');
  }
}
