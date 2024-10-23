import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { ProductSvcService } from '../services/product-svc.service';

@Injectable({
  providedIn: 'root'
})
export class PrivGuardGuard implements CanActivate, CanActivateChild {
  constructor(private svc: ProductSvcService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    return this.svc.unlock
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): MaybeAsync<GuardResult> {
      return true
  }

}
