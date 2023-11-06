import { Component, ElementRef, HostBinding, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'web-main-page',
  templateUrl: './main.page.html',
})
export class MainPageComponent {
  @ViewChild('about') about!: ElementRef;
  activatedUrl!: string;

  constructor(private route: ActivatedRoute) {
    this.route.fragment.subscribe((fragment: string | null) => {
      this.activatedUrl = fragment || '';
      console.log(this.activatedUrl);
    });
  }

  scrollToElement(): void {
    this.about.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
