import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Provider} from "../domaine/provider/provider";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  getProvider(): Observable<Provider[]>{
    return this.http.get<Provider[]>("http://152.228.219.241:3000/provider", {headers: {'Content': 'application/json'}})
  }
}
