import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BeforeUserDetailsGuard implements CanActivate {

  constructor(private router:Router, private dataService: DataService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let routeId = route.paramMap.get('uuid');

    return this.dataService.getCachedData().pipe(map(data => {
      if (data[routeId])
        return true;
      else{
        this.router.navigate(['error']);        
        return false;
      }
    }));
  }
}
