import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'web-navbar',
  templateUrl: './web-navbar.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class NavBarComponent implements OnInit {
  constructor() {}

  async ngOnInit(): Promise<void> {}
}
