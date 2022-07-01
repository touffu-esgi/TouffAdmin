import {AgreementProps} from "./agreement.props";

export class Agreement implements AgreementProps {
 id: string;
 recurring: boolean;
 provider: string;
 recipient: string;
 animalsRefs: string[];
 beginningDate: Date;
 endDate: Date;
 recurrence?: string;
 duration: number;
 remuneration: number;
 status: string;

  constructor(agreementProps: AgreementProps) {
    this.id = agreementProps.id;
    this.recurring = agreementProps.recurring;
    this.provider = agreementProps.provider;
    this.recipient = agreementProps.recipient;
    this.animalsRefs = agreementProps.animalsRefs;
    this.beginningDate = agreementProps.beginningDate;
    this.endDate = agreementProps.endDate;
    this.recurrence = agreementProps.recurrence;
    this.duration = agreementProps.duration;
    this.remuneration = agreementProps.remuneration;
    this.status = agreementProps.status;
  }
}
