import {
  ChangeDetectorRef,
  Component,
  HostBinding,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Galleria } from 'primeng/galleria';
import { PhotoService } from '../../../../core/services/photo.service';
import { Document } from '../../../../core/models/document';

@Component({
  selector: 'web-work',
  templateUrl: './work.component.html',
})
export class WorkComponent implements OnInit, OnDestroy {
  @HostBinding('class') className = 'flex-container padding-top-82';
  @HostBinding('id') id = 'work';

  images: any[] | undefined;
  images2: any[] | undefined;

  showThumbnails = false;
  showThumbnails2 = false;
  fullscreen = false;

  activeIndex = 0;
  activeIndex2 = 0;

  onFullScreenListener: any;

  documentGallery: Document | undefined;

  constructor(
    private photoService: PhotoService,
    public cd: ChangeDetectorRef
  ) {}

  @ViewChild('galleria') galleria: Galleria | undefined;
  @ViewChild('galleria2') galleria2: Galleria | undefined;

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  ngOnInit() {
    this.photoService.getImagesWork1().then((images) => (this.images = images));
    this.photoService
      .getImagesWork2()
      .then((images2) => (this.images2 = images2));

    this.bindDocumentListeners();
  }

  onThumbnailButtonClick(idGallery: string) {
    console.log(idGallery);
    if (idGallery === 'images') {
      this.showThumbnails = !this.showThumbnails;
    } else if (idGallery === 'images2') {
      this.showThumbnails2 = !this.showThumbnails2;
    }
  }

  toggleFullScreen(idGallery: string) {
    console.log(idGallery);
    if (idGallery === 'images') {
      if (this.fullscreen) {
        this.closePreviewFullScreen();
      } else {
        this.openPreviewFullScreen('images');
      }
    } else if (idGallery === 'images2') {
      if (this.fullscreen) {
        this.closePreviewFullScreen();
      } else {
        this.openPreviewFullScreen('images2');
      }
    }

    this.cd.detach();
  }

  openPreviewFullScreen(nameElem?: string) {
    let elem =
      this.galleria?.element.nativeElement.querySelector('.p-galleria');
    let elem2 =
      this.galleria2?.element.nativeElement.querySelector('.p-galleria');
    if (nameElem === 'images') {
      this.differentElemType(elem);
    } else if (nameElem === 'images2') {
      this.differentElemType(elem2);
    }
  }


  onFullScreenChange() {
    this.fullscreen = !this.fullscreen;
    this.cd.detectChanges();
    this.cd.reattach();
  }

  closePreviewFullScreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (this.documentGallery?.['mozCancelFullScreen']) {
      this.documentGallery['mozCancelFullScreen']();
    } else if (this.documentGallery?.['webkitExitFullscreen']) {
      this.documentGallery['webkitExitFullscreen']();
    } else if (this.documentGallery?.['msExitFullscreen']) {
      this.documentGallery['msExitFullscreen']();
    }
  }

  bindDocumentListeners() {
    this.onFullScreenListener = this.onFullScreenChange.bind(this);
    document.addEventListener('fullscreenchange', this.onFullScreenListener);
    document.addEventListener('mozfullscreenchange', this.onFullScreenListener);
    document.addEventListener(
      'webkitfullscreenchange',
      this.onFullScreenListener
    );
    document.addEventListener('msfullscreenchange', this.onFullScreenListener);
  }

  unbindDocumentListeners() {
    document.removeEventListener('fullscreenchange', this.onFullScreenListener);
    document.removeEventListener(
      'mozfullscreenchange',
      this.onFullScreenListener
    );
    document.removeEventListener(
      'webkitfullscreenchange',
      this.onFullScreenListener
    );
    document.removeEventListener(
      'msfullscreenchange',
      this.onFullScreenListener
    );
    this.onFullScreenListener = null;
  }

  ngOnDestroy() {
    this.unbindDocumentListeners();
  }

  galleriaClass() {
    return `custom-galleria ${this.fullscreen ? 'fullscreen' : ''}`;
  }

  fullScreenIcon() {
    return `pi ${
      this.fullscreen ? 'pi-window-minimize' : 'pi-window-maximize'
    }`;
  }
  
  differentElemType(elem: {
    requestFullscreen: () => void;
    mozRequestFullScreen: () => void;
    webkitRequestFullscreen: () => void;
    msRequestFullscreen: () => void;
  }) {
    if (elem?.requestFullscreen) {
      elem.requestFullscreen();
    }
    if (elem?.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    }
    if (elem?.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    }
    if (elem?.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  }
}
