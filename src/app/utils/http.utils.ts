import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export abstract class HttpUtils{
  fullUrl(port: string = "3000"): string {
    return `${document.location.protocol}//${document.location.hostname}:${port}`;
  }
}
