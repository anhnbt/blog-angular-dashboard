import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {NavigationComponent} from './navigation/navigation.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {BlogSharedModule} from "../../shared/blog-shared.module";
import {
  AvatarModule,
  BadgeModule, BreadcrumbModule,
  DropdownModule, FooterModule,
  HeaderModule,
  NavModule,
  SidebarModule,
  SharedModule,
  UtilitiesModule, WidgetModule, TableModule, ProgressModule
} from "@coreui/angular";
import {FooterComponent} from './footer/footer.component';
import {PerfectScrollbarModule} from "ngx-perfect-scrollbar";
import {DashboardComponent} from './dashboard/dashboard.component';
import {ChartjsModule} from "@coreui/angular-chartjs";


@NgModule({
  declarations: [
    AdminComponent,
    NavigationComponent,
    NavBarComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    BlogSharedModule,
    SidebarModule,
    DropdownModule,
    UtilitiesModule,
    AvatarModule,
    BadgeModule,
    HeaderModule,
    NavModule,
    BreadcrumbModule,
    PerfectScrollbarModule,
    FooterModule,
    WidgetModule,
    SharedModule,
    ChartjsModule,
    TableModule,
    ProgressModule
  ]
})
export class AdminModule {
}
