import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SigninComponent } from './signin/signin.component';
import {SharedModule} from "../../shared/shared.module";
import {ButtonModule, CardModule, FormModule, GridModule} from "@coreui/angular";
import {IconModule} from "@coreui/icons-angular";
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    AuthComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
  ]
})
export class AuthModule { }
