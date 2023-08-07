import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'web-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  @HostBinding('class') className = 'flex-container';
  activatedUrl!: string;

  constructor(private route: ActivatedRoute) {
    this.route.fragment.subscribe((fragment: string | null) => {
      this.activatedUrl = fragment || '';
      console.log(this.activatedUrl);
    });
  }

  ngOnInit(): void {}
}
