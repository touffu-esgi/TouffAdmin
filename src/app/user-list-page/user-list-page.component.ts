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
  reportSendOk: boolean | null = null
  errorMsg: string = "An error occurred";
  updateMessage: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getProvider().subscribe(providers => {
      this.providers = providers;
      this.providers.forEach(provider => {
        this.userService.getUserById(provider.userId!).subscribe(user => {
          provider.userObject = user;
        })
      })
    })
  }

  blockUser(provider: Provider) {
    this.userService.UpdateUserByUserId(provider.userId!, 'blocked').subscribe(user => {
      this.reportSendOk = true;
      provider.userObject!.status! = 'blocked';
      this.updateMessage = `L\'utilisateur ${provider.name} a été suspendu !`
    }, error => {
      if (error.error.message) this.errorMsg = error.error.message
      this.reportSendOk = false;
    })
  }

  reactiveUser(provider: Provider) {
    this.userService.UpdateUserByUserId(provider.userId!, 'active').subscribe(user => {
      this.reportSendOk = true;
      provider.userObject!.status! = 'active';
      this.updateMessage = `L\'utilisateur ${provider.name} a été réactivé !`
    }, error => {
      if (error.error.message) this.errorMsg = error.error.message
      this.reportSendOk = false;
    })
  }
}
