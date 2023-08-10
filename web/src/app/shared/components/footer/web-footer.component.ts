import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'web-footer',
  templateUrl: './web-footer.component.html', 
  changeDetection: ChangeDetectionStrategy.Default,
})
export class FooterComponent implements OnInit {
  constructor() {}
   

  async ngOnInit(): Promise<void> {
    
  }
}
