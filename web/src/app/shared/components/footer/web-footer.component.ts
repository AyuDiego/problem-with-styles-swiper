import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterLinkActive, RouterLink } from '@angular/router';

@Component({
    selector: 'web-footer',
    templateUrl: './web-footer.component.html',
    changeDetection: ChangeDetectionStrategy.Default,
    standalone: true,
    imports: [RouterLinkActive, RouterLink],
})
export class FooterComponent implements OnInit {
  constructor() {}
   

  async ngOnInit(): Promise<void> {
    
  }
}
