import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { LogService } from 'src/app/servicios/log.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private r:Router, private l:LogService) { }

  ngOnInit() {
   
  }
  log(){
    this.l.nav=true;
    this.r.navigate(['/login'])
  }
close(){
  this.l.nav2=false;
  this.l.nav=false;
}
}
