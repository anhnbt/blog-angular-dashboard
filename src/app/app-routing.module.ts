import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthComponent } from './theme/layout/auth/auth.component';
import { UnAuthGuard } from './un-auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./theme/layout/admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'signin',
    component: AuthComponent,
    data: {
      title: "Sign in"
    },
    children: []
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: {
      title: "404 Not Found"
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
