import { UserResolver } from './../resolvers/user.resolver';
import { UserCreateUpdateComponent } from './user-create-update/user-create-update.component';
import { UserListComponent } from './user-list/user-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  { 
    path: '', 
    component: UserListComponent 
  },
  { 
    path: 'create', 
    component: UserCreateUpdateComponent 
  },
  { 
    path: 'update/:id', 
    component: UserCreateUpdateComponent,
    resolve: {
      user: UserResolver
    }
  },
  { 
    path: 'details/:id', 
    component: UserDetailComponent,
    resolve: {
      user: UserResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
