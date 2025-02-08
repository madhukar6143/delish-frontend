import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Set BASE_URL (change when deploying)
  private BASE_URL = 'http://localhost:5000';  // Local backend
  // private BASE_URL = 'https://your-production-url.com';  // Production

  constructor(private hc: HttpClient) { }

  userLoginStatus = false;

  sharedUser: {
    username: 'string';
  };

  createUser(userObj): Observable<any> {
    return this.hc.post(`${this.BASE_URL}/user/createuser`, userObj);
  }

  loginUser(credentials): Observable<any> {
    console.log("yeah bro from user services ", credentials);
    return this.hc.post(`${this.BASE_URL}/user/login`, credentials);
  }

  getUser(username): Observable<any> {
    return this.hc.get(`${this.BASE_URL}/user/getuser/${username}`);
  }

  getAllUser(): Observable<any> {
    console.log("in services search");
    return this.hc.get(`${this.BASE_URL}/addtocart`);
  }

  deleteUser() {}

  updateUser() {}
}
