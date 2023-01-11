import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderDescriptionCardDetailsContainerComponent } from './provider-description-card-details-container.component';

describe('ProviderDescriptionCardDetailsContainerComponent', () => {
  let component: ProviderDescriptionCardDetailsContainerComponent;
  let fixture: ComponentFixture<ProviderDescriptionCardDetailsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderDescriptionCardDetailsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderDescriptionCardDetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
