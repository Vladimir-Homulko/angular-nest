import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './guards/auth-guard';

const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule) 
  },
  {
     path: 'users', 
     loadChildren: () => import('./user/user.module').then(module => module.UserModule), 
     canActivate: [AuthenticationGuard] 
  },
  { 
    path: '**',
    redirectTo: '/' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
