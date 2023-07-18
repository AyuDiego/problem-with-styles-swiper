import { HttpClient, HttpHandler } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';


import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SplitButtonModule } from 'primeng/splitbutton';
 
import { NavBarComponent } from './web-navbar.component';



describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        NavBarComponent,
     
      ],
      imports: [
     
        ButtonModule,
        ProgressSpinnerModule,
        MenuModule,
        SplitButtonModule,
      ],
      providers: [ HttpClient, HttpHandler],
    }).compileComponents();

    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
