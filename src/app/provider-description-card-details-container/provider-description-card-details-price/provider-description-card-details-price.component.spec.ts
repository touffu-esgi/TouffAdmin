import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderDescriptionCardDetailsPriceComponent } from './provider-description-card-details-price.component';

describe('ProviderDescriptionCardDetailsPriceComponent', () => {
  let component: ProviderDescriptionCardDetailsPriceComponent;
  let fixture: ComponentFixture<ProviderDescriptionCardDetailsPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderDescriptionCardDetailsPriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderDescriptionCardDetailsPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
