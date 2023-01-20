import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  URL = environment.apiUrl;

  signup(body:any) {
    console.log(body)
    return this.http.post(this.URL + ":9898/user/create/account",body,
    {observe : "body"}
    );
  }

  login(body:any){
    return this.http.post(this.URL + ":9898/user/login",body,
    {observe : "body"}
    );
  }


  verifyOtp(body:any){
    return this.http.post(this.URL + ":9898/user/verify/otp",body,
    {observe : "body"}
    );
  }

}


