import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Provider} from "../domaine/provider/provider";
import {Agreement} from "../domaine/agreement/agreement";
import {Recipient} from "../domaine/recipient/recipient";
import {Report} from "../domaine/report/report";
import {HttpUtils} from "../utils/http.utils";
import {User} from "../domaine/user/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private httpUtils: HttpUtils) {}

  getProvider(): Observable<Provider[]>{
    return this.http.get<Provider[]>(`${this.httpUtils.fullUrl()}/provider`, {headers: {'Content': 'application/json'}})
  }

  getOneProvider(providerId: string): Observable<Provider> {
    return this.http.get<Provider>(`${this.httpUtils.fullUrl()}/provider/${providerId}`, {headers: {'Content': 'application/json'}})
  }

  getAgreementOfOneProvider(providerId: string): Observable<Agreement[]>{
    return this.http.get<Agreement[]>(`${this.httpUtils.fullUrl()}/agreement?providerRef=${providerId}`, {headers: {'Content': 'application/json'}})
  }

  getRecipientByUrl(recipientUrl: string): Observable<Recipient> {
    return this.http.get<Recipient>(recipientUrl, {headers: {'Content': 'application/json'}})
  }

  getProviderReports(providerId: string): Observable<Report[]> {
    return this.http.get<Report[]>(`${this.httpUtils.fullUrl()}/report/${providerId}`, {headers: {'Content': 'application/json'}})
  }

  UpdateUserByUserId(userId: string, status: string): Observable<User>{
    const body = JSON.stringify({"userId": userId, "status": status})
    return this.http.put<User>(`${this.httpUtils.fullUrl()}/user/${userId}`, body, {headers: {'Content-type': 'application/json'}});
  }
}
