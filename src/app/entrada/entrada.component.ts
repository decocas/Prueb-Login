import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms'; 
 
import { OperacionesService } from '../servicios/operaciones.service';
import { Mercancia } from '../clases/mercancia';
import { BodegaService } from '../servicios/bodega.service';
import { Posicion } from '../clases/posicion';
@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {
  posi: Posicion;
  f:boolean=false;
  f1:boolean=false;

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
        if(res!="Entrada fallida"){ // activar las alertas al usuario
          this.alerta1=true;
        }else{
          this.alerta2=true;
                }
   
       });
        
        console.log(formulario.value );
    formulario.reset();
    this.o.m=new Mercancia();
    let b=document.getElementsByName("id_cliente");
       
    for (let index = 0; index < this.b.lista_posicion.length; index++) {
      if(this.posi.id_posicion==this.b.lista_posicion[index].id_posicion){
         this.b.lista_posicion[index].disponibilidad=false;
        this.b.lista_posicion[index].id_mercancia=b[0].innerText;
      }
      
    }

  }
    resetAlerta():void{ //para resetear las alertas
        this.alerta2=false;
        this.alerta1=false;
        this.f=false;
        this.f1=false;
    }
    asignar(p:Posicion){
      this.posi=p;
      
        if( confirm("desea asignar?")){
         // this.posi.disponibilidad=false;
          this.f=true;  
        }
         
        }



    abrir(a:Posicion):void{
      this.posi=a;
       
      
    }
}
