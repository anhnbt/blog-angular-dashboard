import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { filter, map, Observable, of } from 'rxjs';
import { AppSettings } from './app-settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loading$: Observable<boolean> = of(false);

  constructor(
    private title: Title,
    private router: Router,
    public jwtHelper: JwtHelperService
  ) { }

  ngOnInit(): void {
    this.loading$ = this.router.events.pipe(
      filter(
        (e) =>
          e instanceof NavigationStart ||
          e instanceof NavigationEnd ||
          e instanceof NavigationCancel ||
          e instanceof NavigationError
      ),
      map((e) => e instanceof NavigationStart)
    );
    console.log('isTokenExpired', this.jwtHelper.isTokenExpired()); // true or false
    console.log('getTokenExpirationDate', this.jwtHelper.getTokenExpirationDate()); // date
    // console.log('decodeToken', this.jwtHelper.decodeToken(token)); // token
    this.setupTitleListener();
  }

  private setupTitleListener() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route: ActivatedRoute = this.router.routerState.root;
          let routeTitle = '';
          while (route!.firstChild) {
            route = route.firstChild;
          }
          if (route.snapshot.data['title']) {
            routeTitle = route!.snapshot.data['title'];
          }
          return routeTitle;
        })
      )
      .subscribe((title: string) => {
        if (title) {
          this.title.setTitle(`${title} ${AppSettings.suffixTitle}`);
        }
      });
  }
}
