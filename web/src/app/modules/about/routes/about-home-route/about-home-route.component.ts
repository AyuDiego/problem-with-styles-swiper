import { Component, HostBinding, OnInit } from '@angular/core';
 
@Component({
  selector: 'dhv-ui-about-home-route',
  templateUrl: './about-home-route.component.html'
})
export class AboutHomeRouteComponent implements OnInit {
  @HostBinding('class') className = 'flex-container';

   
  constructor(
     
  ) {
     
  }

   

  ngOnInit(): void {
    
  }
 
}
