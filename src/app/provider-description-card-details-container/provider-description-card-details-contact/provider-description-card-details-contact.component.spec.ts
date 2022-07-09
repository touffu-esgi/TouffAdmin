import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderDescriptionCardDetailsContactComponent } from './provider-description-card-details-contact.component';

describe('ProviderDescriptionCardDetailsContactComponent', () => {
  let component: ProviderDescriptionCardDetailsContactComponent;
  let fixture: ComponentFixture<ProviderDescriptionCardDetailsContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderDescriptionCardDetailsContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderDescriptionCardDetailsContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
