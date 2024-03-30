import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { ParallaxItemDirective } from '../../directives/parallax-item.directive';

@Component({
    selector: 'web-main-panel',
    templateUrl: './web-main-panel.component.html',
    changeDetection: ChangeDetectionStrategy.Default,
    standalone: true,
    imports: [
        ParallaxItemDirective,
        RouterLinkActive,
        RouterLink,
    ],
})
export class MainPanelComponent implements OnInit {

  constructor() {}
  
  ngOnInit(): void {}
}
