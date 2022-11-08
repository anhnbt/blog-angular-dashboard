import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl: string = AppSettings.apiUrl;

  constructor(
    private cookieService: CookieService,
    private http: HttpService,
    private jwtHelper: JwtHelperService
    ) { }

  authenticate(o: Object): Observable<any> {
    return this.http
      .post(`${this.authUrl}/Login`, o);
  }

  isAuthenticated(): boolean {
    const accessToken = localStorage.getItem('access_token');
    return !!(accessToken && this.jwtHelper.isTokenExpired(accessToken) === false);
  }
}
