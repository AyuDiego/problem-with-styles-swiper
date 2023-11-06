import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'web-main-panel',
  templateUrl: './web-main-panel.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class MainPanelComponent implements OnInit {
  @Output() scrollAnchor = new EventEmitter<void>();

  constructor() {}

  onButtonClick(): void {
    this.scrollAnchor.emit();
  }
  
  ngOnInit(): void {}
}
