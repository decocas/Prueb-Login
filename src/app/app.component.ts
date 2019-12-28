import { Component } from '@angular/core';

//import { AngularFireAuth } from '@angular/fire/auth';
//import { auth } from 'firebase/app';

import { from } from 'rxjs';
import { Router } from '@angular/router';
import { LogService } from './servicios/log.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(//public af: AngularFireAuth,
            private r:Router, private l:LogService){
	
} 
    title = 'SGLAM';
/*
    login() {
    this.af.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }*/

  salida(){
  this.r.navigate(['/salida']);
  }
  entrada(){
    this.r.navigate(['/entrada']);
  }
  info(){
    this.r.navigate(['/info']);
  }
  consulta(){
    this.r.navigate(['/consulta']);
  }
 /* logout() {
    this.af.auth.signOut();
  }*/
}
