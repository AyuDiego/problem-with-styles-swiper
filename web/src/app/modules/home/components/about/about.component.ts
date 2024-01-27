import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
    selector: 'web-about',
    templateUrl: './about.component.html',
    standalone: true,
})
export class AboutComponent implements OnInit {
  @HostBinding('class') className = 'flex-container flex-container--page';
  @HostBinding('id') id = 'about';


  constructor() {}

  ngOnInit(): void {}

  downloadCvFromLocal(){  
    //se descarga el pdf
    // let link = document.createElement("a");
    // link.download = "CV_Diego Del Barrio Ayuso Updated EN 2023.pdf";
    // link.href = "assets/documents/CV_Diego Del Barrio Ayuso Updated EN 2023.pdf";
    // link.click();
    //o se habre una pestaña nueva con el pdf
    window.open('assets/documents/CV_Diego Del Barrio Ayuso Updated EN 2023.pdf', '_blank');

  }

}
