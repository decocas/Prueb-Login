import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { Router } from '@angular/router';
 
import { NgForm } from '@angular/forms';
import { LogService } from 'src/app/servicios/log.service';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public logo: AngularFireAuth, 
              private r:Router,
              private l:LogService) { }

  ngOnInit() {
  }
  alerta:boolean=false;
  login() { 
    this.logo.auth.signInWithPopup(new auth.GoogleAuthProvider());
    this.l.flag=true;   
 
  }
  inicio(formulario:NgForm){
     
    /*
    if (formulario.value.mail==='oleocali@correo.com' && formulario.value.password==='123456'){
      console.log(formulario.value);
      this.l.flag=true;
      
      this.r.navigate(['']);
      this.l.nav2=true; 
      formulario.reset();
    }else{
      this.l.flag=false;
      formulario.reset();}      
    */  
      this.logo.auth.signInWithEmailAndPassword(formulario.value.mail, formulario.value.password)
      .then((res)=>{
       this.r.navigate(['']);
       this.l.flag=true;
       this.l.nav2=true; 
      
      }).catch(err=>console.log('err', err.message,this.alerta=true ));
            formulario.reset();  
               
   }

   resetAlerta():void{
    this.alerta=false;
   }
}
