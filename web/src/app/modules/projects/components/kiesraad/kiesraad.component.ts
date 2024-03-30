import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
    selector: 'web-kiesraad',
    templateUrl: './kiesraad.component.html',
    standalone: true,
})
export class KiesraadComponent implements OnInit {
  @HostBinding('class') className = 'flex-container flex-container--page';
  @HostBinding('id') id = 'kiesraad';


  constructor() {}

  ngOnInit(): void {} 
  

}
