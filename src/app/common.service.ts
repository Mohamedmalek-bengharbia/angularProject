import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/User';
import { Observable } from 'rxjs';
import { vol } from './model/vol';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  URL = "http://localhost:3000/vols"
  UserURL = "http://localhost:3000/users"
  constructor(private _http: HttpClient) { }
  getVol() {

    return this._http.get(this.URL)
  }
  addUser(usera: User): Observable<User> {
    return this._http.post<User>(this.UserURL, usera);

  }
  addVol(vols: vol): Observable<vol> {
    return this._http.post<vol>(this.URL, vols);
  }
  getCurrentData(id){
    return this._http.get(`${this.URL}/${id}`);
   
   }
   updatevol(id,info){
    return this._http.put(`${this.URL}/${id}`,info);
   
  }
  deletevol(id){
    return this._http.delete(`${this.URL}/${id}`);
   
   }
   getCurrentDataa(id){
    return this._http.get(`${this.UserURL}`);
   
   } 

}