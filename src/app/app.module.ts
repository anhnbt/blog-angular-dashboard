import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/* App Root */
import { AppComponent } from './app.component';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

import { NotFoundComponent } from './not-found/not-found.component';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from "@auth0/angular-jwt";
import { ReactiveFormsModule } from '@angular/forms';
import {CoreModule} from "./core/core.module";
import { IconModule, IconSetService } from '@coreui/icons-angular';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BlogSharedModule} from "./shared/blog-shared.module";

/* Feature Modules */
import {ButtonModule} from "@coreui/angular";
import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CoreModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:4200', 'localhost:8080'],
        disallowedRoutes: [""],
      },
    }),
    IconModule,
    BlogSharedModule,
    ButtonModule,
    PerfectScrollbarModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    CookieService, IconSetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
