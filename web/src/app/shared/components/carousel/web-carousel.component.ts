import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
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
  selector: 'web-carousel',
  templateUrl: './web-carousel.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  standalone: true,
  imports: [NgClass, ScrollableDirective],
})
export class CarouselComponent implements OnInit, AfterViewInit, OnDestroy {
  @HostBinding('class') className = 'p-0';
  @ViewChild('cardDeck', { static: true })
  cardDeck!: ElementRef;
  @ViewChild('nextButton', { static: true })
  nextButton!: ElementRef;
  @ViewChild('backButton', { static: true })
  backButton!: ElementRef;
  cards: HTMLElement[] = [];
  divs: HTMLElement[] = [];
  middlePosition!: number;
  isHideContent = true;
  isAnimating = false;
  objectPositionPercentage = 50;
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
  currentImageIndex = 0;

  cardSize!: number;

  slider!: HTMLElement;
  slide!: number;

  sizes!: {
    slider: string;
    card: number;
    thresholds: {
      previous: number;
      next: number;
    }
  } 

  source =  this.imageUrls;

  constructor(private renderer: Renderer2, private cdr: ChangeDetectorRef) {
    this.cards = [];
  }

  ngOnInit(): void {
    console.log(this.imageUrls);
    this.sizes = {
      slider: `${this.cards.length * 100}%`,
      card: this.cardSize ,
      thresholds: {
        previous: 0.1,
        next: 0.6
      }
    };
    
  }

  ngAfterViewInit(): void {
    this.cards = Array.from(
      this.cardDeck.nativeElement.querySelectorAll('.cards')
    );
    this.cardSize = this.cards[0]?.getBoundingClientRect().width;
    console.log("🚀 ~ CarouselComponent ~ ngAfterViewInit ~ this.cardSize:", this.cardSize)

    this.setupCarousel();
    this.setMiddleCard();
    this.cdr.detectChanges();
  }

  setMiddleCard(): void {
    const cardContainer = this.cardDeck.nativeElement;
    const cardContainerRect = cardContainer?.getBoundingClientRect();
    const middlePosition = cardContainerRect.left + cardContainerRect.width / 2;

    let middleCard: HTMLElement | null = null;
    let minDistance = Infinity;
    for (const card of this.cards) {
      const cardRect = card.getBoundingClientRect();
      const cardMiddlePosition = cardRect.left + cardRect.width / 2;
      const distance = Math.abs(cardMiddlePosition - middlePosition);
      if (distance < minDistance) {
        minDistance = distance;
        middleCard = card;
      }
    }

    middleCard?.classList.add('shownCard');
  }

  setupCarousel(): void {
    if (this.cards.length > 0) {
      setTimeout(() => {
        const marginPerCard = 24;

        this.cards.forEach((card, index) => {
           this.slide = 0;
  
          console.log("🚀 ~ CarouselComponent ~ this.cards.forEach ~ sizes:", this.sizes)
          if (index === 0) {
            card.style.left = `calc(50% - (${this.cardSize }px / 2 ) )`;
            card.style.marginRight = `${marginPerCard}px`;
          } else {
            card.style.left = `calc(50% - (${this.cardSize }px / 2)  )`;
            card.style.marginRight = `${marginPerCard}px`;
          }
        });
        this.updateButtonState();
      }, 0);
    }
  }

  moveToCard(currentCard: HTMLElement, targetCard: HTMLElement): void {
    if (!currentCard || !targetCard) {
      console.error('currentCard or targetCard is undefined');
      return;
    }
    const newIndex = this.cards.indexOf(targetCard);

    this.currentImageIndex = newIndex;
    console.log("🚀 ~ CarouselComponent ~ moveToCard ~  this.currentImageIndex:",  this.currentImageIndex)

    const currentCardRect = currentCard.getBoundingClientRect();
    const targetCardRect = targetCard.getBoundingClientRect();

    this.isAnimating = true;

    this.cards.forEach((card) => {
      const cardDistance = targetCardRect.left - currentCardRect.left;
      gsap.to(card, {
        x: `-=${cardDistance}`,
        duration: 0.3,
        ease: 'power1.out',
        onComplete: () => {
          this.updateButtonState();
          this.isAnimating = false;
        },
      });
    });

    currentCard?.classList.remove('shownCard');
    targetCard?.classList.add('shownCard');
    this.updateButtonState();
  }

  onSliderPanMove(event: any) { 
     const startPoint = this.slide * this.sizes.card * -1;
     const slider = document.getElementById('slider'); 
     this.currentImageIndex = event;
     const marginPerCard = 24;
    const currentCard = this.cards[this.currentImageIndex];
 

  

 
    currentCard?.classList.remove('shownCard'); 
     if (slider) {
      slider.style.transform = `translateX(${ event.deltaX + marginPerCard}px)`;
      console.log("🚀 ~ CarouselComponent ~ onSliderPanMove ~ slider.style.transform:", slider.style.transform)
      console.log("🚀 ~ CarouselComponent ~ onSliderPanMove ~ marginPerCard:", marginPerCard)
      console.log("🚀 ~ CarouselComponent ~ onSliderPanMove ~ event.deltaX:", event.deltaX)
      console.log("🚀 ~ CarouselComponent ~ onSliderPanMove ~ startPoint:", startPoint)
    }
  }

  updateButtonState(): void {
    this.backButton.nativeElement.disabled = this.currentImageIndex === 0;
    this.nextButton.nativeElement.disabled =
      this.currentImageIndex === this.cards.length - 1;
  }

  onPrevClick(): void {
    if (this.currentImageIndex > 0 && !this.isAnimating) {
      console.log("🚀 ~ CarouselComponent ~ onPrevClick ~ this.currentImageIndex :", this.currentImageIndex )
      const currentCard = this.cards[this.currentImageIndex];
      const targetCard = this.cards[this.currentImageIndex - 1];
      this.moveToCard(currentCard, targetCard);
      this.updateButtonState();

      this.objectPositionPercentage -= 10;
      if (this.objectPositionPercentage < 0) {
        this.objectPositionPercentage = 0;
      }
    }
  }

  onNextClick(): void {
    if (this.currentImageIndex < this.cards.length - 1 && !this.isAnimating) {
      const currentCard = this.cards[this.currentImageIndex];
      const targetCard = this.cards[this.currentImageIndex + 1];
      this.moveToCard(currentCard, targetCard);
      this.updateButtonState();

      this.objectPositionPercentage += 10;
      if (this.objectPositionPercentage > 100) {
        this.objectPositionPercentage = 100;
      }
    }
  }

  onImgMouseover(): void {
    this.isHideContent = false;
  }

  onImgMouseout(): void {
    this.isHideContent = true;
  }

  ngOnDestroy(): void {}


 

  // onSliderPanEnd(event: any) {
  //   console.log("🚀 ~ CarouselComponent ~ onSliderPanEnd ~ event:", event)
  //   const target = this.fetchPanEndSlideTarget(event);
  //   const endPoint = target * this.sizes.card * -1;
  //   const slider = document.getElementById('slider');
  //   console.log("🚀 ~ CarouselComponent ~ onSliderPanEnd ~ slider:", slider)
    
  //   if (slider) {
  //     this.renderer.addClass(slider, 'animating');
  //     slider.style.transform = `translateX(${endPoint}px)`;
  //     setTimeout(() => this.renderer.removeClass(slider, 'animating'), 300);
  //   }

  //   this.slide = target;
  // }
  
  //   fetchPanEndSlideTarget(event: any) {
  //   console.log("🚀 ~ CarouselComponent ~ fetchPanEndSlideTarget ~ event:", event)
  //   const offset = this.slide * this.sizes.card * -1;
  //   const currentTranslation = offset + event.deltaX;
  //   const currentSlideAsFloat=  Math.abs(currentTranslation / this.sizes.card);
  //   const currentSlide = Math.floor(currentSlideAsFloat);

  //   let delta = currentSlideAsFloat - currentSlide;
  //   let target = currentSlide;

  //   if (delta > this.sizes.thresholds.next) {
  //     target += 1;
  //   } else if (delta < this.sizes.thresholds.prev) {
  //     target -= 1
  //   }

  //   // If we are at page 0 and the target would go to -1 we'll reset it to 0
  //   if (target < 0 || currentTranslation > 0) {
  //     target = 0
  //   }

  //   // If the user wants to scroll over the last slide we'll reset it
  //   if (target >= this.source.length) {
  //     target = this.source.length - 1;
  //   }
  //   console.log("🚀 ~ CarouselComponent ~ fetchPanEndSlideTarget ~ target:", target)

  //   return target;
  // }

  
}
