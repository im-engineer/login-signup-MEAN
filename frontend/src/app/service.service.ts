import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  URL = environment.apiUrl;

  signup() {
    return this.http.get(this.URL + ":9060/ekg/userType");
  }

}


