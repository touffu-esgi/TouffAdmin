import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Admin} from "../../domaine/admin/admin";
import {HttpUtils} from "../../utils/http.utils";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  admin?: Admin
  constructor(private http: HttpClient, private httpUtils: HttpUtils, private router: Router) {
    if(!this.admin){
      this.admin = JSON.parse(localStorage.getItem('admin')!);
    }
  }

  auth(admin: Admin){
    const body = JSON.stringify(admin)
    this.http.post<Admin>(`${this.httpUtils.fullUrl()}/admin/login`, body, {headers: {'Content-Type': 'application/json'}}).subscribe(admin =>{
      this.admin = admin;
      localStorage.setItem('admin', JSON.stringify(admin));
      this.router.navigate(["/user-list"])
    })
  }
}
