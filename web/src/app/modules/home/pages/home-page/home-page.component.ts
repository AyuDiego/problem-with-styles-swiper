import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkComponent } from '../../components/work/work.component';
import { AboutComponent } from '../../components/about/about.component'; 
@Component({
    selector: 'web-home',
    templateUrl: './home-page.component.html',
    standalone: true,
    imports: [AboutComponent, WorkComponent],
})
export class HomeComponent implements OnInit {
  @ViewChild('about') about!: ElementRef;
  @ViewChild('work') work!: ElementRef;  
  @Input() aboutId: string;

  activatedUrl!: string;
  constructor(private route: ActivatedRoute) {
  this.aboutId = 'about';
    
    this.route.fragment.subscribe((fragment: string | null) => {
      // if (fragment == 'work' || fragment == 'about') {
      //   this.about.nativeElement.scrollIntoView({ behavior: 'smooth' });

      // }
      this.activatedUrl = fragment || '';
      console.log(this.activatedUrl);
    });
  }
  ngOnInit(): void {}

  
  scrollToElementAbout(): void {
    this.about.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
  scrollToElementWork(): void {
    this.work.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
