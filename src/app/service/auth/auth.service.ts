import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Admin} from "../../domaine/admin/admin";
import {HttpUtils} from "../../utils/http.utils";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  admin: Admin = new Admin("", "")
  constructor(private http: HttpClient, private httpUtils: HttpUtils) { }

  auth(admin: Admin){
    const body = JSON.stringify(admin)
    this.http.post<Admin>(`${this.httpUtils.fullUrl()}/admin/login`, body, {headers: {'Content-Type': 'application/json'}}).subscribe(admin =>{
      this.admin = admin;
      console.log(admin)
    })
  }
}
