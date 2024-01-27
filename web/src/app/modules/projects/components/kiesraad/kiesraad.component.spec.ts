
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KiesraadComponent } from './kiesraad.component';



describe('KiesraadComponent', () => {
  let component: KiesraadComponent;
  let fixture: ComponentFixture<KiesraadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [KiesraadComponent]
});
    fixture = TestBed.createComponent(KiesraadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
