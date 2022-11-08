import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { table } from 'console';
import { CookieService } from 'ngx-cookie-service';
import { tap } from 'rxjs';
import { AppSettings } from 'src/app/app-settings';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  @ViewChild('input') private elementRef!: ElementRef;
  isLoading: boolean = false;
  loginForm!: FormGroup;
  data: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.focus();
  }

  onSubmit() {
    this.isLoading = true;

    this.authService.authenticate(this.loginForm.value)
      .pipe(
        tap(_ => {
          this.isLoading = false;
        })
      )
      .subscribe(
        result => {
          this.data = result;
          const accessToken = this.data.token;
          // const refreshToken = this.data['data'].refresh_token;
          const clientId = this.data.username;
          // const expiresIn = this.data['data'].expires_in;
          const expiresIn = ((3600 * 24) * 7);
          localStorage.setItem('access_token', accessToken);

          this.cookieService.set('access_token', accessToken,
            this.fromSecsToDate(expiresIn), undefined, undefined, AppSettings.securedCookie);

          // this.cookieService.set('refresh_token', refreshToken,
          //   this.fromSecsToDate(AppSettings.refreshTokenExp), undefined, undefined, AppSettings.securedCookie);

          // this.cookieService.set('client_id', clientId,
          //   this.fromSecsToDate(AppSettings.refreshTokenExp), undefined, undefined, AppSettings.securedCookie);

          this.router.navigate(['/']);
        },
        error => {
          this.data = error;
        }
      );
  }

  fromSecsToDate = (secs: number) => {
    const date = new Date();
    date.setSeconds(secs);

    return date;
  };

}
