import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(public logo: AngularFireAuth) { }
  nav:boolean= false;
  nav2:boolean= false;
   
  flag:boolean=false;

  logout(){
    this.logo.auth.signOut;
  }

}
