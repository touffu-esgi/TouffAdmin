import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";

class Simple {
}

@Component({
  selector: 'app-provider-description-card-details-grades',
  templateUrl: './provider-description-card-details-grades.component.html',
  styleUrls: ['./provider-description-card-details-grades.component.scss']
})
export class ProviderDescriptionCardDetailsGradesComponent implements OnInit, OnChanges {

  constructor(private userService: UserService) { }
  @Input() providerId: string = "";
  average: number = 0;

  ngOnInit(): void {

  }


  ngOnChanges(changes: Simple){
    this.userService.getAverage(this.providerId).subscribe(average => {
      this.average = average.average
    });
  }
}
