import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderDescriptionCardDetailsGradesComponent } from './provider-description-card-details-grades.component';

describe('ProviderDescriptionCardDetailsGradesComponent', () => {
  let component: ProviderDescriptionCardDetailsGradesComponent;
  let fixture: ComponentFixture<ProviderDescriptionCardDetailsGradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderDescriptionCardDetailsGradesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderDescriptionCardDetailsGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
