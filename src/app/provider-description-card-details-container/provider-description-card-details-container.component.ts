import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-provider-description-card-details-container',
  templateUrl: './provider-description-card-details-container.component.html',
  styleUrls: ['./provider-description-card-details-container.component.scss']
})
export class ProviderDescriptionCardDetailsContainerComponent implements OnInit {

  @Input() base_tarif?: number;
  @Input() name?: string;
  @Input() id?: string;
  constructor() { }

  ngOnInit(): void {
  }

}
