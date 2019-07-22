import { Injectable } from '@angular/core';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthUser } from 'src/models/auth.User';
import { map, tap, retry, catchError, filter } from 'rxjs/operators';
import { TokenData } from 'src/models/auth.Token';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authApi: string;
  baseApi: string;
  headerObj: any;

  constructor(private _http: HttpClient) {
    this.authApi = environment.authUrl;
    this.baseApi = environment.baseUrl;
    this.headerObj = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(environment.clientId + ':' + environment.password),
      // 'Content-Type': "application/x-www-form-urlencoded",
    });
  }

  login(data: AuthUser) {
    let input = new FormData();
    // Add your values in here
    input.append('grant_type', data.grant_type);
    input.append('password', data.password);
    input.append('username', data.username);

    return this._http.post(this.authApi, input, { headers: this.headerObj })
      .pipe(
        map((res: TokenData) => {
          this.SaveLoginDetails(res);
          sessionStorage.setItem('username', data.username);
          return true;
        })
      );
  }

  private SaveLoginDetails(data: TokenData) {

    sessionStorage.setItem('token', data.access_token);
    sessionStorage.setItem('refreshToken', data.refresh_token);
  }

  getUserDetails() {
    // return this._http.get<any>(this.baseApi + 'api/common/user?id=' + sessionStorage.getItem('username'),
    return this._http.get<any>(this.baseApi + 'api/common/user?id=avik',
      {
        headers: new HttpHeaders({
          'Authorization': 'Bearer' + sessionStorage.getItem('token')
        })
      });
  }

  logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('refreshToken');
  }

  getUserDetailsFromSession() {
    return sessionStorage.getItem('userDetail');
  }

  getUserNameFromSession(): string {
    return sessionStorage.getItem('username');
  }

  isLoggedIn(): boolean {
    var token = sessionStorage.getItem('token');
    if (token == undefined || token == null || token == '')
      return false;
    else
      return true;
  }

  isAdmin(): boolean {
    return false;
  }
}
