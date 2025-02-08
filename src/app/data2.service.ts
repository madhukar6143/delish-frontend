import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class Data2Service {

  // Comment/uncomment based on environment
  private BASE_URL = 'http://localhost:5000';  // Local development
  // private BASE_URL = 'https://your-production-url.com';  // Production

  constructor(private hc: HttpClient, private un: UserService) { }

  getSoupData(): Observable<any> {
    return this.hc.get<any>(`${this.BASE_URL}/items/soups`);
  }

  getBiryaniData(): Observable<any> {
    return this.hc.get<any>(`${this.BASE_URL}/items/biryani`);
  }

  getPizzasData(): Observable<any> {
    return this.hc.get<any>(`${this.BASE_URL}/items/pizzas`);
  }

  getSaladsData(): Observable<any> {
    return this.hc.get<any>(`${this.BASE_URL}/items/salads`);
  }

  getGrillData(): Observable<any> {
    return this.hc.get<any>(`${this.BASE_URL}/items/grill`);
  }

  getFishData(): Observable<any> {
    return this.hc.get<any>(`${this.BASE_URL}/items/fish`);
  }

  getPrawnsData(): Observable<any> {
    return this.hc.get<any>(`${this.BASE_URL}/items/prawns`);
  }

  getCrabsData(): Observable<any> {
    return this.hc.get<any>(`${this.BASE_URL}/crabs`);
  }

  getVegCurriesData(): Observable<any> {
    return this.hc.get<any>(`${this.BASE_URL}/vegcurries`);
  }

  getNonVegCurriesData(): Observable<any> {
    return this.hc.get<any>(`${this.BASE_URL}/nonvegcurries`);
  }

  getRotiesData(): Observable<any> {
    return this.hc.get<any>(`${this.BASE_URL}/roti`);
  }

  getCakesData(): Observable<any> {
    return this.hc.get<any>(`${this.BASE_URL}/cakes`);
  }

  getIceCreamsData(): Observable<any> {
    return this.hc.get<any>(`${this.BASE_URL}/icecreams`);
  }

  getDrinksData(): Observable<any> {
    return this.hc.get<any>(`${this.BASE_URL}/drinks`);
  }

  getMenuData(): Observable<any> {
    return this.hc.get<any>(`${this.BASE_URL}/menu`);
  }

  getFromAddToCart(): Observable<any> {
    let username = this.un.sharedUser.username;
    return this.hc.get<any>(`${this.BASE_URL}/items/addtocart/${username}`);
  }

  getFromAddToCar(obj): Observable<any> {
    let username = this.un.sharedUser.username;
    return this.hc.post<any>(`${this.BASE_URL}/items/removeFromCartFromComponent/${username}`, obj);
  }

  postToAddToCart(obj): Observable<any> {
    let username = this.un.sharedUser.username;
    return this.hc.post<any>(`${this.BASE_URL}/items/addToCartFromComponent/${username}`, obj);
  }

  deleteDataUsingId(id): Observable<any> {
    let username = this.un.sharedUser.username;
    return this.hc.post<any>(`${this.BASE_URL}/items/removeFromCartFromComponent/${username}`, id);
  }

  ydeleteDataUsingId(id): Observable<any[]> {
    return this.hc.delete<any[]>(`${this.BASE_URL}/addtocart/${id}`);
  }

  userLoginStatus(): boolean {
    return localStorage.getItem("username") !== null;
  }

  logout() {
    localStorage.clear();
  }
}
