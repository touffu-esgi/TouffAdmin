import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-provider-description-card-details-container',
  templateUrl: './provider-description-card-details-container.component.html',
  styleUrls: ['./provider-description-card-details-container.component.scss']
})
export class ProviderDescriptionCardDetailsContainerComponent implements OnInit, OnChanges {

  @Input() base_tarif?: number;
  @Input() name?: string;
  @Input() id?: string;
  @Input() profile_pic?: string;
  image?: string | ArrayBuffer | null;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.userService.getFile(this.profile_pic!).subscribe(img => {
      this.transformImage(img);
    })
  }

  private transformImage(image: object) {
    let reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        this.image = reader.result;
      }, false
    );
    if (image) {
      // @ts-ignore
      reader.readAsDataURL(image);
    }
  }

}
