import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../service/user.service";
import {Provider} from "../domaine/provider/provider";
import {Agreement} from "../domaine/agreement/agreement";
import {Report} from "../domaine/report/report";

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
  agreementToDisplay?: Agreement;
  displayList: boolean = true;
  reports: Report[] = [];
  constructor(
    private activeRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(params => {
      if(params["providerId"]){
        this.getProvider(params["providerId"])
        this.getReport(params["providerId"])
      }
    }, error => {
      this.router.navigate([''])
    })
  }

  displayAgreement(agreement: Agreement) {
    this.agreementToDisplay = agreement;
    this.displayList = false;
  }

  private getProvider(providerId: string) {
    this.userService.getOneProvider(providerId).subscribe(provider => {
      this.provider = provider;
      this.getAgreements(providerId);
    });
  }

  private getAgreements(providerId: string) {
    this.userService.getAgreementOfOneProvider(providerId).subscribe(agreement => {
      this.agreements = agreement;
    })
  }

  private getReport(providerId: string){
    this.userService.getProviderReports(providerId).subscribe(reports => {
      this.reports = reports;
      this.reports.forEach(report => {
        this.userService.getRecipientByUrl(report._reportedByUserId!).subscribe(recipient => {
          report._reportedByUserId = recipient.name;
        })
      })

    });
  }
}
