import { UserModel } from './../../model/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(
    private readonly userService: UserService,
    private readonly activateRoute: ActivatedRoute,
    private readonly router: Router
  ) {}

  user: UserModel= new UserModel();

  ngOnInit(): void {
    this.activateRoute.data.subscribe((response: any) => {
      this.user = response.user;
    });
  }

  redirectToUpdate(id: string) {
    this.router.navigate([`/users/update/${id}`])
  }

}
