import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CookieService } from 'ngx-cookie-service';
import { AuthGuard } from './auth.guard';
import { UnAuthGuard } from './un-auth.guard';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from "@auth0/angular-jwt";
import { ReactiveFormsModule } from '@angular/forms';
import {CoreModule} from "./core/core.module";
import { IconModule, IconSetService } from '@coreui/icons-angular';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SharedModule} from "./theme/shared/shared.module";
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
    SharedModule,
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
