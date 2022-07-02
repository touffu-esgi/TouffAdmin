import {ReportProps} from "./report.props";

export class Report implements ReportProps{
  _id?: string;
  _reportedUserId?: string;
  _reportedByUserId?: string;
  _comment?: string;
  _dateReported?: Date;
  _active?: boolean;

  constructor(props: ReportProps) {
    this._id = props._id;
    this._reportedUserId = props._reportedUserId;
    this._reportedByUserId = props._reportedByUserId;
    this._comment = props._comment ? props._comment : '';
    this._dateReported = props._dateReported;
    this._active = true;
  }
}

