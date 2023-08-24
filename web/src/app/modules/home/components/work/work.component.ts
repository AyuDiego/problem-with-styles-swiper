import { Component, HostBinding, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Galleria } from 'primeng/galleria';
import { PhotoService } from '../../../../services/photoservice';

@Component({
  selector: 'web-work',
  templateUrl: './work.component.html',
})
export class WorkComponent implements OnInit, OnDestroy{
  @HostBinding('class') className = 'flex-container padding-top-82';
  @HostBinding('id') id = 'work';

  images: any[] | undefined;

  showThumbnails: boolean | undefined;

  fullscreen: boolean = false;

  activeIndex: number = 0;

  onFullScreenListener: any;
constructor(private photoService: PhotoService) {}
  @ViewChild('galleria') galleria: Galleria | undefined;

  responsiveOptions: any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];
  
  ngOnInit() {
      this.photoService.getImages().then((images) => (this.images = images));
      this.bindDocumentListeners();
  }

  onThumbnailButtonClick() {
      this.showThumbnails = !this.showThumbnails;
  }

  toggleFullScreen() {
      if (this.fullscreen) {
          this.closePreviewFullScreen();
      } else {
          this.openPreviewFullScreen();
      }

      // this.cd.detach();
  }

  openPreviewFullScreen() {
      let elem = this.galleria?.element.nativeElement.querySelector('.p-galleria');
      if (elem.requestFullscreen) {
          elem.requestFullscreen();
      } else if (elem['mozRequestFullScreen']) {
          /* Firefox */
          elem['mozRequestFullScreen']();
      } else if (elem['webkitRequestFullscreen']) {
          /* Chrome, Safari & Opera */
          elem['webkitRequestFullscreen']();
      } else if (elem['msRequestFullscreen']) {
          /* IE/Edge */
          elem['msRequestFullscreen']();
      }
  }

  onFullScreenChange() {
      this.fullscreen = !this.fullscreen;
      // this.cd.detectChanges();
      // this.cd.reattach();
  }

  closePreviewFullScreen() {
      if (document.exitFullscreen) {
          document.exitFullscreen();
      }  
  }

  bindDocumentListeners() {
      this.onFullScreenListener = this.onFullScreenChange.bind(this);
      document.addEventListener('fullscreenchange', this.onFullScreenListener);
      document.addEventListener('mozfullscreenchange', this.onFullScreenListener);
      document.addEventListener('webkitfullscreenchange', this.onFullScreenListener);
      document.addEventListener('msfullscreenchange', this.onFullScreenListener);
  }

  unbindDocumentListeners() {
      document.removeEventListener('fullscreenchange', this.onFullScreenListener);
      document.removeEventListener('mozfullscreenchange', this.onFullScreenListener);
      document.removeEventListener('webkitfullscreenchange', this.onFullScreenListener);
      document.removeEventListener('msfullscreenchange', this.onFullScreenListener);
      this.onFullScreenListener = null;
  }

  ngOnDestroy() {
      this.unbindDocumentListeners();
  }

  galleriaClass() {
      return `custom-galleria ${this.fullscreen ? 'fullscreen' : ''}`;
  }

  fullScreenIcon() {
      return `pi ${this.fullscreen ? 'pi-window-minimize' : 'pi-window-maximize'}`;
  }
}
