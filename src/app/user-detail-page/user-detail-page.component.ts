import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../service/user.service";
import {Provider} from "../domaine/provider/provider";
import {Agreement} from "../domaine/agreement/agreement";

@Component({
  selector: 'app-user-detail-page',
  templateUrl: './user-detail-page.component.html',
  styleUrls: ['./user-detail-page.component.scss']
})
export class UserDetailPageComponent implements OnInit {
  provider: Provider = new Provider({
    id: "",
    name: "",
    surname: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    base_tariff: 0,
    radius: 0,
    profile_title: "",
    profile_desc: "",
  });
  agreements: Agreement[] = [];

  constructor(
    private activeRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(params => {
      if(params["providerId"]){
        this.userService.getOneProvider(params["providerId"]).subscribe(provider => {
          this.provider = provider;
          this.userService.getAgreementOfOneProvider(params["providerId"]).subscribe(agreement => {
            this.agreements = agreement;
          })
        });
      }
    }, error => {
      this.router.navigate([''])
    })
  }

  getRecipient(recipientUrl: string) {
    this.userService.getRecipientByUrl(recipientUrl).subscribe(recipient => {
      console.log(recipient)
    })
  }
}
