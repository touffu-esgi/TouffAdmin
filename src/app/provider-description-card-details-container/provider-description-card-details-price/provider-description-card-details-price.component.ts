import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-provider-description-card-details-price',
  templateUrl: './provider-description-card-details-price.component.html',
  styleUrls: ['./provider-description-card-details-price.component.scss']
})
export class ProviderDescriptionCardDetailsPriceComponent implements OnInit {

  @Input() base_tarif?: number;
  constructor() { }

  ngOnInit(): void {
  }

}
