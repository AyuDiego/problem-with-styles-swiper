import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { NgClass } from '@angular/common'; 
import gsap from 'gsap';

@Component({
  selector: 'web-carousel',
  templateUrl: './web-carousel.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  standalone: true,
  imports: [NgClass],
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
    location.origin + '/assets/img/work/carousel/0.webp',   location.origin + '/assets/img/work/carousel/0.webp',
    location.origin + '/assets/img/work/carousel/1.webp',
    location.origin + '/assets/img/work/carousel/0.webp',
    location.origin + '/assets/img/work/carousel/1.webp',
    location.origin + '/assets/img/work/carousel/0.webp',
    location.origin + '/assets/img/work/carousel/1.webp',
  ];
  currentImageIndex = 0;


  
  constructor() {
    this.cards = [];
  }

  ngOnInit(): void {
    console.log(this.imageUrls);
  }

  ngAfterViewInit(): void {
    this.cards = Array.from(
      this.cardDeck.nativeElement.querySelectorAll('.cards')
    );
    this.setupCarousel();
    this.setMiddleCard();
  }

  setMiddleCard(): void {
    const cardContainer = this.cardDeck.nativeElement;
    const cardContainerRect = cardContainer?.getBoundingClientRect();
    const middlePosition = cardContainerRect.left + cardContainerRect.width / 2;
    console.log("🚀 ~ CarouselComponent ~ setMiddleCard ~ middlePosition:", middlePosition)
  
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
        let cardSize = this.cards[index]?.getBoundingClientRect().width; 
        if (index === 0) {
          card.style.left = `calc(50% - (${cardSize}px / 2 ) )`;
          card.style.marginRight = `${marginPerCard}px`; 
        } else {
          card.style.left = `calc(50% - (${cardSize}px / 2)  )`;
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
  
    const currentCardRect = currentCard.getBoundingClientRect();
    const targetCardRect = targetCard.getBoundingClientRect();
  
    this.isAnimating = true; 

    this.cards.forEach((card) => { 
      const cardDistance = targetCardRect.left - currentCardRect.left;
      gsap.to(card, {
        x: `-=${cardDistance}`, 
        duration: 0.3, 
        ease: "power1.out",
        onComplete: () => {
          this.updateButtonState();
          this.isAnimating = false; 
        }
      });
  
    });
  
    currentCard?.classList.remove('shownCard');
    targetCard?.classList.add('shownCard'); 
    this.updateButtonState();
  }

  updateButtonState(): void {
    this.backButton.nativeElement.disabled = this.currentImageIndex === 0;
    this.nextButton.nativeElement.disabled = this.currentImageIndex === this.cards.length - 1;
  }

  onPrevClick(): void {
    if (this.currentImageIndex > 0 && !this.isAnimating) { 
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
}
