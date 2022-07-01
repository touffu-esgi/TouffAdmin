import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementCardComponent } from './agreement-card.component';

describe('AgreementCardComponent', () => {
  let component: AgreementCardComponent;
  let fixture: ComponentFixture<AgreementCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgreementCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreementCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
