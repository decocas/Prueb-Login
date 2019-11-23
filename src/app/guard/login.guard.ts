import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,  Router } from '@angular/router';
import { Observable, from } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import  {take, map, tap} from 'rxjs/operators';
import { auth } from 'firebase';
import { LogService } from '../servicios/log.service';
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private a:AngularFireAuth, private r:Router, private l:LogService ){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
   /* return this.a.authState
    .pipe(take(1))
    .pipe(map(authState=> !!authState))
    .pipe(tap(auth=>{ console.log(auth);
      if(!auth ){
       this.r.navigate(['/login']);
      }
    }));
  }*/
  if(this.l.flag){
    
    return true;
  }else{
    this.r.navigate(['/login']);
    return false;
    
  }
}
}
