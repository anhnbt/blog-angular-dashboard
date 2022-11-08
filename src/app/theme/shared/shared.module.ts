import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ResponseMessageComponent } from './response-message/response-message.component';
import { LoaderComponent } from './loader/loader.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ButtonModule, CardModule, FormModule, GridModule, SpinnerModule} from "@coreui/angular";
import {IconModule} from "@coreui/icons-angular";



@NgModule({
  declarations: [
    BreadcrumbComponent,
    ResponseMessageComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FormModule,
    ReactiveFormsModule,
    GridModule,
    SpinnerModule,
    ButtonModule,
    CardModule,
    IconModule,
  ],
  exports: [
    FormModule,
    ReactiveFormsModule,
    BreadcrumbComponent,
    ResponseMessageComponent,
    LoaderComponent,
    GridModule,
    SpinnerModule,
    ButtonModule,
    CardModule,
    IconModule,
  ]
})
export class SharedModule { }
