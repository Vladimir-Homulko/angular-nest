import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule, MatOptionModule, MatOptionSelectionChange } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { Store, StoreModule } from '@ngrx/store';
import { AuthReducer } from '../store/reducers/auth.reducers';


@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatOptionModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FlexLayoutModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    StoreModule.forFeature('auth', AuthReducer)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthModule { }
