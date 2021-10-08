import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UsersState } from 'src/app/store/reducers/user.reducers';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  ngOnInit(): void {
  }

}
