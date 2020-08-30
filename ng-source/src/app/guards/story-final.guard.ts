import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppScopeService } from '../services/app-scope.service';

@Injectable({
  providedIn: 'root'
})
export class StoryFinalGuard implements CanDeactivate<unknown> {
  
  /**
   *
   */
  constructor(private appSvc:AppScopeService) {
   
    
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.appSvc.showNavigation = true;
      
      return true;
  }
  
}
