

export interface AgreementProps {
  id: string;
  recurring: boolean;
  recurrence?: string;
  provider: string;
  recipient: string;
  animalsRefs: string[];
  beginningDate: Date;
  endDate: Date;
  duration: number;
  remuneration: number;
  status: string;
}
