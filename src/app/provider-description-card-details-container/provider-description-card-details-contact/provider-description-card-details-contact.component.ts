import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-provider-description-card-details-contact',
  templateUrl: './provider-description-card-details-contact.component.html',
  styleUrls: ['./provider-description-card-details-contact.component.scss']
})
export class ProviderDescriptionCardDetailsContactComponent implements OnInit {

  @Input() id?: string;
  constructor() { }

  ngOnInit(): void {
  }

}
