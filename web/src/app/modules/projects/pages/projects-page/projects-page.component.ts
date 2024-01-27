import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../../../shared/components/footer/web-footer.component';
import { NavBarComponent } from '../../../../shared/components/web-navbar/web-navbar.component'; 
@Component({
    selector: 'web-projects',
    templateUrl: './projects-page.component.html',
    standalone: true,
    imports: [
        NavBarComponent,
        RouterOutlet,
        FooterComponent,
    ],
})
export class ProjectsComponent implements OnInit {
  @ViewChild('kiesraad') kiesraad!: ElementRef;
  @ViewChild('work') work!: ElementRef;  
  @Input() kiesraadId: string;

  activatedUrl!: string;
  constructor(private route: ActivatedRoute) {
  this.kiesraadId = 'kiesraad';
    
    // this.route.fragment.subscribe((fragment: string | null) => {
    //   // if (fragment == 'work' || fragment == 'kiesraad') {
    //   //   this.kiesraad.nativeElement.scrollIntoView({ behavior: 'smooth' });

    //   // }
    //   this.activatedUrl = fragment || '';
    //   console.log(this.activatedUrl);
    // });
  }
  ngOnInit(): void {}

  
  scrollToElementAbout(): void {
    this.kiesraad.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToElementWork(): void {
    this.work.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
