import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { NgClass } from '@angular/common';
import gsap from 'gsap';
import { ScrollableDirective } from '../../directives/scrollable.directive';


@Component({
  selector: 'web-carousel-grab-slide',
  templateUrl: './web-carousel-grab-slide.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  standalone: true,
  imports: [NgClass, ScrollableDirective],
})
export class CarouselGrabSlideComponent implements OnInit, AfterViewInit, OnDestroy {
 


  slider!: HTMLElement;
  slide!: number;

  sizes!: {
    slider: string;
    card: number;
    thresholds: {
      prev: number;
      next: number;
    }
  } 

  source = this.populateSource();

  constructor(private renderer: Renderer2) {
 
  }

  ngOnInit(): void {
    console.log(this.populateSource);

    this.slide = 0;
    this.sizes = {
      slider: `${this.source.length * 100}%`,
      card: 215,
      thresholds: {
        prev: 0.1,
        next: 0.6
      }
    };
  }

  ngAfterViewInit(): void {
  console.log('CarouselGrabSlideComponent ngAfterViewInit');
  }

   
 

  onSliderPanMove(event: { deltaX: number; }) {
    const startPoint = this.slide * this.sizes.card * -1;
    const slider = document.getElementById('slider');

    if (slider) {
      slider.style.transform = `translateX(${startPoint + event.deltaX}px)`;
    }
  }


  onSliderPanEnd(event: any) {
    const target = this.fetchPanEndSlideTarget(event);
    const endPoint = target * this.sizes.card * -1;
    const slider = document.getElementById('slider');
    
    if (slider) {
      this.renderer.addClass(slider, 'animating');
      slider.style.transform = `translateX(${endPoint}px)`;
      setTimeout(() => this.renderer.removeClass(slider, 'animating'), 300);
    }

    this.slide = target;
  }
  
  private fetchPanEndSlideTarget(event: { deltaX: number; }) {
    const offset = this.slide * this.sizes.card * -1;
    const currentTranslation = offset + event.deltaX;
    const currentSlideAsFloat=  Math.abs(currentTranslation / this.sizes.card);
    const currentSlide = Math.floor(currentSlideAsFloat);

    let delta = currentSlideAsFloat - currentSlide;
    let target = currentSlide;

    if (delta > this.sizes.thresholds.next) {
      target += 1;
    } else if (delta < this.sizes.thresholds.prev) {
      target -= 1
    }

    // If we are at page 0 and the target would go to -1 we'll reset it to 0
    if (target < 0 || currentTranslation > 0) {
      target = 0
    }

    // If the user wants to scroll over the last slide we'll reset it
    if (target >= this.source.length) {
      target = this.source.length - 1;
    }

    return target;
  }

  
  private populateSource() {
    return [{
      image: 'url("https://images.pexels.com/photos/3153199/pexels-photo-3153199.jpeg")',
      date: `10 Aprile`,
      title: `Evento con titolo 0`,
      age: '20 / 50 anni'
    }, {
      image: 'url("https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg")',
      date: `10 Aprile`,
      title: `Evento con titolo 1`,
      age: '20 / 50 anni'
    }, {
      image: 'url("https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg")',
      date: `10 Aprile`,
      title: `Evento con titolo 2`,
      age: '20 / 50 anni'
    }, {
      image: 'url("https://images.pexels.com/photos/3184427/pexels-photo-3184427.jpeg")',
      date: `10 Aprile`,
      title: `Evento con titolo 3`,
      age: '20 / 50 anni'
    }, {
      image: 'url("https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg")',
      date: `10 Aprile`,
      title: `Evento con titolo 4`,
      age: '20 / 50 anni'
    }]
  }
  ngOnDestroy(): void {}
  
}
