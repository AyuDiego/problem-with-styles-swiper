import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[parallaxItem]',
})
export class ParallaxItemDirective implements OnInit {
  @Input() top!: string;
  @Input() left!: string;
  @Input() opacity = 1;
  @Input() inversion = false;
  @Input() movement = 0.025;
  public newX!: number;
  public newY!: number;
  constructor(private eleRef: ElementRef) {}

  ngOnInit(): void {
    this.eleRef.nativeElement.style.position = 'absolute';
    this.eleRef.nativeElement.style.top = this.top;
    this.eleRef.nativeElement.style.left = this.left;
    this.eleRef.nativeElement.style.backgroundPosition = `calc(50% + 0px) calc(50% + 0px)`;
    this.eleRef.nativeElement.style.opacity = this.opacity;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: { pageX: any; pageY: any; }) {
    this.movement = this.movement ? this.movement : 0.025;

    const cursorX = e.pageX;
    const cursorY = e.pageY;

    if (!this.inversion) {
      this.newX = cursorX * this.movement;
      this.newY = cursorY * this.movement;
    } else {
      this.newX = -(cursorX * this.movement);
      this.newY = -(cursorY * this.movement);
    }
   
    this.eleRef.nativeElement.style.backgroundPosition = `calc(50% + ${ this.newX }px) calc(50% + ${ this.newY }px)`;
  }
}