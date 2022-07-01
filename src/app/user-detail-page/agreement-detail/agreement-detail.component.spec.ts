import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementDetailComponent } from './agreement-detail.component';

describe('AgreementDetailComponent', () => {
  let component: AgreementDetailComponent;
  let fixture: ComponentFixture<AgreementDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgreementDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreementDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
