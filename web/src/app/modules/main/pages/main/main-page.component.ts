import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'web-main-page',
  templateUrl: './main-page.component.html',
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
 
