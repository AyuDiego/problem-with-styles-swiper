import { AfterViewInit, Directive, ElementRef,  OnInit, ViewChild } from '@angular/core';
import  Parallax from 'parallax-js';


@Directive({
  selector: '[parallaxItem]',
})
// export class ParallaxItemDirective {
export class ParallaxItemDirective implements AfterViewInit {
// 
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const scene = this.el.nativeElement;
    new Parallax(scene, {
      relativeInput: true,
      pointerEvents: false,
      limitX: 50,
      limitY: 50,
      scalarX: 1,
      scalarY: 1,
      clipRelativeInput: true,
      calibrateX: false,
      calibrateY: false,
      originX: 0.5,
      originY: 0.5,
      invertX: false,
      invertY: false,
      frictionX: 0.1,
      frictionY: 0.1,
    });
  }
}