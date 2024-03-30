import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsComponent } from './skills-page.component';



describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [SkillsComponent]
});
    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});