import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  host = 'http://localhost:8000/api/'
  constructor(private http:HttpClient) { }

  login(user: string, pass: string){
    let endpoint = 'login';
    let url = this.host + endpoint;
    let authObj = {
      name: user,
      password: pass
    }
    let data = JSON.stringify(authObj);
    let httpOptionObj = new HttpHeaders({
      'Content-Type' : 'application/json'
    });

    let httpOption = {
      headers: httpOptionObj
    }

    return this.http.post(url, data, httpOption);
  }
}
