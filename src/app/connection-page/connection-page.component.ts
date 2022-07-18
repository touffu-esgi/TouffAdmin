import { Component, OnInit } from '@angular/core';
import {User} from "../domaine/user/user";
import {Admin} from "../domaine/admin/admin";

@Component({
  selector: 'app-connection-page',
  templateUrl: './connection-page.component.html',
  styleUrls: ['./connection-page.component.scss']
})
export class ConnectionPageComponent implements OnInit {
  admin: Admin = new Admin("", "");
  constructor() { }

  ngOnInit(): void {
  }

}
