import { Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Renderer2, Output } from '@angular/core';
import 'hammerjs';

@Directive({
  selector: '[scrollable]', 
  standalone: true
})
export class ScrollableDirective implements OnInit {
  @Input('scrollable-duration')
    duration!: number;
  @Input('scrollable-slide-size')
    size!: number;
  @Input('scrollable-source') source: any[];
  @Input('scrollable-thresholds')
    thresholds!: { previous: number; next: number; };

  @Output('scroll') scroll: EventEmitter<number>;
  @Output('scrollStart') scrollStart: EventEmitter<number>;
  @Output('scrollEnd') scrollEnd: EventEmitter<number>;

  translation!: number;
  current: number;

  @HostListener('panstart', ['$event']) onSliderPanStart(event: any) {
    this.handleSliderPanStart(event);
  }

  @HostListener('panmove', ['$event']) onSliderPanMove(event: any) {
    this.handleSliderPanMove(event);
  }

  @HostListener('panend', ['$event']) onSliderPanEnd(event: any) {
    this.handleSliderPanEnd(event);
  }

  constructor(private element: ElementRef,
              private renderer: Renderer2) {
      this.source = [];
      this.current = 0;

      this.scroll = new EventEmitter<number>()
      this.scrollStart = new EventEmitter<number>()
      this.scrollEnd = new EventEmitter<number>()
  }

  ngOnInit() {
    this.duration = this.duration || 300;
    this.size = this.size || window.innerWidth;
    this.thresholds = {
      previous: this.thresholds
        ? this.thresholds.previous
        : 0.1,
      next: this.thresholds
        ? this.thresholds.next
        : 0.6
    };

    this.renderer.setStyle(this.element.nativeElement, 'width', `${this.source.length * this.size}%`);
  }

  private handleSliderPanStart(event: any): void {
    this.scrollStart.emit(this.current);
  }

  private handleSliderPanMove(event: { deltaX: number; }): void {
    const startPoint = this.current * this.size * -1;

    this.scroll.emit(Math.abs((startPoint + event.deltaX) / this.size));
    this.renderer.setStyle(this.element.nativeElement, 'transform', `translateX(${startPoint + event.deltaX}px)`);
  }

  private handleSliderPanEnd(event: any): void {
    const target = this.fetchPanEndSlideTarget(event);
    const endPoint = target * this.size * -1;
    
    this.renderer.setStyle(this.element.nativeElement, 'transition', `all ${this.duration}ms`);
    this.renderer.setStyle(this.element.nativeElement, 'transform', `translateX(${endPoint}px)`);

    setTimeout(
      () => {
        this.renderer.removeStyle(this.element.nativeElement, 'transition')
        this.scrollEnd.emit(target);
      }, 
      this.duration
    );

    this.current = target;
  }

  private fetchPanEndSlideTarget(event: { deltaX: number; }): number {
    const offset = this.current * this.size * -1;
    const currentTranslation = offset + event.deltaX;
    const currentSlideAsFloat=  Math.abs(currentTranslation / this.size);
    const currentSlide = Math.floor(currentSlideAsFloat);

    let delta = currentSlideAsFloat - currentSlide;
    let target = currentSlide;

    if (delta > this.thresholds.next) {
      target += 1;
    } else if (delta < this.thresholds.previous) {
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
}