import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = 'https://test-api.inizio.cz/api/user';

  constructor(private http: HttpClient) { }

  getUserData(token: string): Observable<any> {
    let headers = new HttpHeaders();
    let newHeader = headers.append('Authorization', `Bearer ${token}`);    
    return this.http.get(this.url, { headers: newHeader });
  }

  loginUser(userName: string, password: string): Observable<any> {
    return this.http.post(`${this.url}/login`, { "email": userName, "password": password }
    )
  }
}
