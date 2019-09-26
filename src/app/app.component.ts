import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(public af: AngularFireAuth){
	
} 
    title = 'Login';

    login() {
    this.af.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.af.auth.signOut();
  }
}
