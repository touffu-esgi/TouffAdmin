import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {Provider} from "../domaine/provider/provider";

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.scss']
})
export class UserListPageComponent implements OnInit {
  providers?: Provider[]
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getProvider().subscribe(providers => {
      this.providers = providers;
    })
  }

  deleteProvider(provider: Provider) {
    console.log(provider)
    this.userService.getUserByEmail(provider).subscribe(user => {
      console.log(user)
    }, error => {
      console.log(error)
    })
  }
}
