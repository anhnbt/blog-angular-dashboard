import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ShepherdComponent} from "./shepherd/shepherd.component";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    data: {
      title: `Admin`
    },
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: {
          title: `Dashboard`
        }
      }
    ]
  }, {
    path: 'step',
    component: ShepherdComponent,
    data: {
      title: `Shepherd`
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
