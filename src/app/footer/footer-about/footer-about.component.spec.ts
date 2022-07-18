import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAboutComponent } from './footer-about.component';

describe('FooterAboutComponent', () => {
  let component: FooterAboutComponent;
  let fixture: ComponentFixture<FooterAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
