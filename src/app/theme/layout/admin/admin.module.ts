import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {SharedModule} from "../../shared/shared.module";
import {
  AvatarModule,
  BadgeModule, BreadcrumbModule,
  DropdownModule,
  HeaderModule,
  NavModule,
  SidebarModule,
  UtilitiesModule
} from "@coreui/angular";
import { FooterComponent } from './footer/footer.component';
import {PerfectScrollbarModule} from "ngx-perfect-scrollbar";


@NgModule({
  declarations: [
    AdminComponent,
    NavigationComponent,
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    SidebarModule,
    DropdownModule,
    UtilitiesModule,
    AvatarModule,
    BadgeModule,
    HeaderModule,
    NavModule,
    BreadcrumbModule,
    PerfectScrollbarModule
  ]
})
export class AdminModule { }
