import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms'; 
 
import { OperacionesService } from '../servicios/operaciones.service';
import { Mercancia } from '../clases/mercancia';
import { BodegaService } from '../servicios/bodega.service';
@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {

  constructor( private o: OperacionesService,
    private b:BodegaService) {
    
   }

  ngOnInit() {
    this.listar();
  }
  listar(){
    this.o.getMerca()
      .subscribe(res => {
        
        this.b.lista_mercancia=res as Mercancia[];
        console.log(res);
      });
  }
  alerta1:boolean=false;
alerta2:boolean=false;   
  crearMerca(formulario: NgForm){
   this.o.crear(formulario.value)
    .subscribe(res=>{
      console.log(res);
      this.listar();
     /*if(res==='ok'){
        this.alerta1=true;
      }else if(res){
        this.alerta2=true;
      }*/
    });
    console.log(formulario.value );
    formulario.reset();
    this.o.m=new Mercancia();

  }

}
