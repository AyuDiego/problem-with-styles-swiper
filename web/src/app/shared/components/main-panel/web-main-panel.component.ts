import { ChangeDetectionStrategy, Component,  OnInit } from '@angular/core';
import * as Parallax from 'parallax-js';


@Component({
  selector: 'web-main-panel',
  templateUrl: './web-main-panel.component.html', 
  changeDetection: ChangeDetectionStrategy.Default,
})
export class MainPanelComponent implements OnInit { 
 

  constructor() {}
   

  async ngOnInit(): Promise<void> {
    
  }
}
