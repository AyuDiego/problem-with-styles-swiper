import {  AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectorRef, Component, ElementRef, HostBinding, OnDestroy, OnInit, Renderer2, ViewEncapsulation, viewChildren } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RouterOutlet } from '@angular/router';   
  
import { CommonModule } from '@angular/common';
import { SwiperContainer, register } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
 

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [CommonModule, RouterOutlet],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {  
  title = 'web';
  @HostBinding('class') className = 'p-0';
  divEls = viewChildren<ElementRef>('el');
  isHideContent: boolean[] = [];
  imageUrls: string[] = [
    location.origin + '/assets/img/work/carousel/0.webp',
    location.origin + '/assets/img/work/carousel/1.webp',
    location.origin + '/assets/img/work/carousel/0.webp',
    location.origin + '/assets/img/work/carousel/0.webp',
    location.origin + '/assets/img/work/carousel/1.webp',
    location.origin + '/assets/img/work/carousel/0.webp',
    location.origin + '/assets/img/work/carousel/1.webp',
    location.origin + '/assets/img/work/carousel/0.webp',
    location.origin + '/assets/img/work/carousel/1.webp',
  ];
  source = this.imageUrls;

  swiperElement: SwiperContainer | null = null;
  paginationCustom: any;

  constructor(private renderer: Renderer2, private cdr: ChangeDetectorRef) {
    this.isHideContent = new Array(this.imageUrls.length).fill(true);
  }

  ngOnInit(): void {
    const swiperElementConstructor = document.querySelector('swiper-container');
    const params: SwiperOptions = {
      slidesPerView: 'auto',
      spaceBetween: 24,
      slidesPerGroup: 1,
      centeredSlides: true,
      grabCursor: true,
      freeMode: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: { slidesPerView: 'auto', spaceBetween: 24 },
        500: { slidesPerView: 'auto', spaceBetween: 24 },
        640: { slidesPerView: 'auto', spaceBetween: 24 },
        768: { slidesPerView: 'auto', spaceBetween: 24 },
        1024: { slidesPerView: 'auto', spaceBetween: 24 },
        1699: { slidesPerView: 'auto', spaceBetween: 24 },
        2560: { slidesPerView: 'auto', spaceBetween: 24 },
      },
      slideActiveClass: 'swiper-slide-active',
      injectStyles: [
        `.swiper-pagination-bottom{
          bottom: 0 !important;
          top: auto !important;
          background-color: turquoise;
        } 
        .swiper-pagination-bullet-active {
          color: #fff;
          background: #007aff;
        }   
      `,
      ],
      pagination: {
        type: 'progressbar',
        el: 'swiper-pagination',
        horizontalClass: 'swiper-pagination-horizontal-bottom',
        renderProgressbar(progressbarFillClass) {
          return `<span class="${progressbarFillClass}"></span>`;
        },
      },
    };
    const style = document.createElement('style');
    style.innerHTML = `
    .swiper-pagination-bottom{
      bottom: 0 !important;
      top: auto !important;
      background-color: turquoise;
    } 
    .swiper-pagination-bullet-active {
      color: #fff;
      background: #007aff;
    }  
    `;
    // Append the style element to the shadow root of the Swiper element
 
      if (swiperElementConstructor && swiperElementConstructor.shadowRoot) {
        swiperElementConstructor.shadowRoot.appendChild(style);
      }

      Object.assign(swiperElementConstructor!, params);

    this.swiperElement = swiperElementConstructor as SwiperContainer;
    this.swiperElement?.initialize();
    this.cdr.detectChanges();
  }

  ngAfterViewInit(): void {
    register();
  }

  onImgMouseover(index: number): void {
    this.isHideContent[index] = false;
  }

  onImgMouseout(index: number): void {
    this.isHideContent[index] = true;
  }
  ngOnDestroy(): void {}
}