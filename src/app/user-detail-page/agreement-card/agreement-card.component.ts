import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Agreement} from "../../domaine/agreement/agreement";
import {UserService} from "../../service/user.service";
import {Recipient} from "../../domaine/recipient/recipient";

@Component({
  selector: 'app-agreement-card',
  templateUrl: './agreement-card.component.html',
  styleUrls: ['./agreement-card.component.scss']
})
export class AgreementCardComponent implements OnInit {
  @Input() agreement?: Agreement;
  recipient?: Recipient = new Recipient('','','','','','','');
  @Output() displayAgreement: EventEmitter<Agreement> = new EventEmitter();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getRecipientByUrl(this.agreement!.provider).subscribe(Recipient => {
      this.recipient = Recipient;
    })
  }

  displayAgreementClick() {
    if(this.agreement){
      this.displayAgreement.emit(this.agreement)
    }
  }

}
