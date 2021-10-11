import { UserService } from './../../services/user.service';
import { UserModel } from './../model/user.model';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<UserModel> {

    constructor(
        private userService: UserService 
    ) {}


    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> {   
        return this.userService.getUserById(route.paramMap.get('id')!)
    }
}