import { HttpClient,HttpHeaders,HttpHeaderResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  baseurl="http://localhost:8080/";
  constructor(public http:HttpClient) { }

  login(data:any):Observable<any>{
    console.log("I'm Server");
    return this.http.post(this.baseurl+"login",data)
  }
}
