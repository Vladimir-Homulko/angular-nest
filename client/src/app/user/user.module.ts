import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UsersReducer } from '../store/reducers/user.reducers';
import { AuthInterceptor } from '../http-interceptors/auth-interceptor';
import {MatTableModule} from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    StoreModule.forFeature('user', UsersReducer),
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class UserModule { }
