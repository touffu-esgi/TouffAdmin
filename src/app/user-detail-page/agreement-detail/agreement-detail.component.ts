import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Agreement} from "../../domaine/agreement/agreement";

@Component({
  selector: 'app-agreement-detail',
  templateUrl: './agreement-detail.component.html',
  styleUrls: ['./agreement-detail.component.scss']
})
export class AgreementDetailComponent implements OnInit {
  @Input() agreement?: Agreement;
  @Output() backToList: EventEmitter<void> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {

  }

  back() {
    this.backToList.emit();
  }
}
