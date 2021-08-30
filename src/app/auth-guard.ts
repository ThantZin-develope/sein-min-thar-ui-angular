import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, RouterStateSnapshot, Route, UrlSegment, UrlTree, Router } from "@angular/router";
import { Observable } from "rxjs";
import { EnDeService } from "./commons/encrpyt-decrypt-util";



@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private router: Router, private endeService: EnDeService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    throw new Error("Method not implemented.");
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    throw new Error("Method not implemented.");
  }
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let url = `/${route.path}`
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {

    let encrpytedToken = localStorage.getItem('token');
    if (encrpytedToken && encrpytedToken != null) {
      var token = this.endeService.decrpytData(encrpytedToken, true);
    }
    if (token != null) {
      //TODO to go to backend and check is this token actually exit in the system
      return true;
    }
    this.router.navigateByUrl('/login')
    return false;



  }
}
