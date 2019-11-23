import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LogService } from '../servicios/log.service';

@Injectable({
  providedIn: 'root'
})
export class GeneralGuard implements CanActivate {
  constructor( private r:Router, private l:LogService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
          if(this.l.a===null){
           
            return false;
          
          }else{
            this.r.navigate(['']);
            return true;
           
    
          }

   
  }
}
