import {AgreementProps} from "./agreement.props";

export class Agreement implements AgreementProps {
 id: string;
 recurring: boolean;
 provider: string;
 recipient: string;
 animals: string[];
 beginningDate: string;
 endDate: string;
 recurrence?: string;
 duration: number;
 remuneration: number;
 status: string;

  constructor(agreementProps: AgreementProps) {
    this.id = agreementProps.id;
    this.recurring = agreementProps.recurring;
    this.provider = agreementProps.provider;
    this.recipient = agreementProps.recipient;
    this.animals = agreementProps.animals;
    this.beginningDate = agreementProps.beginningDate;
    this.endDate = agreementProps.endDate;
    this.recurrence = agreementProps.recurrence;
    this.duration = agreementProps.duration;
    this.remuneration = agreementProps.remuneration;
    this.status = agreementProps.status;
  }
}
