import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ResponseMessageComponent } from './response-message/response-message.component';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    BreadcrumbComponent,
    ResponseMessageComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BreadcrumbComponent,
    ResponseMessageComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
