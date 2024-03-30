import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../../../shared/components/footer/web-footer.component';
import { MainPanelComponent } from '../../../../shared/components/main-panel/web-main-panel.component';
import { NavBarComponent } from '../../../../shared/components/web-navbar/web-navbar.component';

@Component({
    selector: 'web-main-page',
    templateUrl: './main-page.component.html',
    standalone: true,
    imports: [
        NavBarComponent,
        MainPanelComponent,
        RouterOutlet,
        FooterComponent,
    ],
})
export class MainPageComponent implements OnInit {
  @ViewChild('about') about!: ElementRef;  
    
  activatedUrl!: string;
  constructor(private route: ActivatedRoute) {
    this.route.fragment.subscribe((fragment: string | null) => {
      this.activatedUrl = fragment || '';
      console.log(this.activatedUrl);
    });
  }
  
  ngOnInit(): void {
    console.log(this.about);
  }
  
  }
 
