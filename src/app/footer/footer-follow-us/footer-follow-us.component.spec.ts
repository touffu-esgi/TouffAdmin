import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterFollowUsComponent } from './footer-follow-us.component';

describe('FooterFollowUsComponent', () => {
  let component: FooterFollowUsComponent;
  let fixture: ComponentFixture<FooterFollowUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterFollowUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterFollowUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
