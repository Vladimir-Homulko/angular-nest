import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "src/services/auth.service";

@Injectable({ providedIn: 'root' })
export class AuthenticationGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService) {
    }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot) {
        const token = this.authService.getToken();

        if (token) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}