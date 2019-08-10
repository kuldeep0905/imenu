import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from "rxjs/Rx";
@Injectable()
export class VendorAuthGuard implements CanActivate {

    constructor(private _router: Router) { } 
    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean>|boolean {
        if (localStorage.getItem('imenu_user')) {
            
            return true;
        } else {
            console.log("asdf")
			this._router.navigate(['login']);
            return false;
        }
    }
}