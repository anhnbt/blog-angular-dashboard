import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../auth.service";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";
import {tap} from "rxjs";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit, AfterViewInit {

  @ViewChild('input') private elementRef!: ElementRef;
  isLoading: boolean = false;
  loginForm!: FormGroup;
  data: any;

  constructor(
    private fb:FormBuilder,
    private authService: AuthService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/']);
    }
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
      .subscribe(result => {
        this.data = result;
        const { token } = this.data;
        // const refreshToken = this.data['data'].refresh_token;
        // const clientId = this.data.username;
        // const expiresIn = this.data['data'].expires_in;
        // const expiresIn = ((3600 * 24) * 7);

        // this.cookieService.set('access_token', accessToken,
        //   DateUtils.fromSecsToDate(expiresIn), undefined, undefined, AppSettings.securedCookie);

        // this.cookieService.set('refresh_token', refreshToken,
        //   this.fromSecsToDate(AppSettings.refreshTokenExp), undefined, undefined, AppSettings.securedCookie);

        // this.cookieService.set('client_id', clientId,
        //   this.fromSecsToDate(AppSettings.refreshTokenExp), undefined, undefined, AppSettings.securedCookie);

        localStorage.setItem('access_token', token);

        this.router.navigate(['/']);
      });
  }

}
