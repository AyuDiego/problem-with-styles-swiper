import { HttpClient, HttpHandler } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';


import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SplitButtonModule } from 'primeng/splitbutton';
import { CarouselGrabSlideComponent } from './web-carousel-grab-slide.component';



describe('CarouselGrabSlideComponent', () => {
  let component: CarouselGrabSlideComponent;
  let fixture: ComponentFixture<CarouselGrabSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        ButtonModule,
        ProgressSpinnerModule,
        MenuModule,
        SplitButtonModule,
        CarouselGrabSlideComponent,
    ],
    providers: [HttpClient, HttpHandler],
}).compileComponents();

    fixture = TestBed.createComponent(CarouselGrabSlideComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
