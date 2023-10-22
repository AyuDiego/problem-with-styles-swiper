import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'web-skills',
  templateUrl: './skills.component.html',
})
export class SkillsComponent implements OnInit {
  @HostBinding('class') className = 'flex-container flex-container--page';
  @HostBinding('id') id = 'skills';

  constructor() {}

  ngOnInit() {}
}
