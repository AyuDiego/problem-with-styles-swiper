import { AfterViewInit, Directive, ElementRef,  OnInit, ViewChild } from '@angular/core';
import * as Parallax from 'parallax-js';


@Directive({
  selector: '[parallaxItem]',
})
export class ParallaxItemDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const scene = this.el.nativeElement;
    const parallaxInstance = new Parallax(scene, {
      relativeInput: true,
      hoverOnly: true,
      pointerEvents: true,
      limitX: 50,
      limitY: 50,
      scalarX: 10,
      scalarY: 10,
      clipRelativeInput: true,
      calibrateX: false,
      calibrateY: false,
      originX: 0.5,
      originY: 0.5,

    });
  }
}