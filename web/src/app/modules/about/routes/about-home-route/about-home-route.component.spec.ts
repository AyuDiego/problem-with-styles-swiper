
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHomeRouteComponent } from './about-home-route.component';

describe('AboutHomeRouteComponent', () => {
  let component: AboutHomeRouteComponent;
  let fixture: ComponentFixture<AboutHomeRouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutHomeRouteComponent]
    });
    fixture = TestBed.createComponent(AboutHomeRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
