import { Component, OnInit } from '@angular/core';
import { OperacionesService } from '../servicios/operaciones.service';
import { NgForm } from '@angular/forms';
import { Mercancia } from '../clases/mercancia';
import { BodegaService } from '../servicios/bodega.service';
 

@Component({
  selector: 'app-salida',
  templateUrl: './salida.component.html',
  styleUrls: ['./salida.component.css']
})
export class SalidaComponent implements OnInit {

  constructor(private o: OperacionesService,
    private b:BodegaService) { }

  ngOnInit() {
    this.listar();
  }
  alerta1:boolean=false;
  alerta2:boolean=false;
  alerta0:string='';
  mercancia:Mercancia;
 
  getMercancia(formulario:NgForm){
    console.log(formulario.value._id);
    console.log(this.mercancia);
      this.o.buscarMerca(formulario.value._id).subscribe(res =>{
        
        this.mercancia= res as Mercancia ;
      //this.mercancia=this.o.m;
      if(res==null|| formulario.valid==false || this.mercancia==undefined ){
        console.log(res);
        
          this.alerta2=true;
          this.alerta0='Id incorrecto';

        }
         formulario.reset();
       

      })  ;
     
   
  }
  edit(mercancia: Mercancia){
this.o.m=mercancia;
//this.b.model.f_salida=this.o.m.f_salida; 
  
console.log(this.o.m);
  }
  editarMercancia( formulario?:NgForm ){
    if(formulario.value._id){  
    this.o.editarMerca(formulario.value).subscribe(res=>{
        
      console.log(formulario.value);
      console.log(res);
      if(res=='ok')        {
        this.alerta1=true;
        this.alerta0='registro de Salida Exitoso';
      } else{
        this.alerta2=true;
        this.alerta0='registro de Salida fallido';
      }
      formulario.reset();
        this.listar();
            });
    
          }
  
      }
  listar(){
    this.o.getMerca()
      .subscribe(res => {
        
        this.b.lista_mercancia=res as Mercancia[];
        console.log(res);
      });
    }
       
    methodo(formulario:NgForm):void{
      this.b.model=formulario.value;
    this.b.arreglo.push(this.b.model);
    this.b.model={};
      
    }
    resetAlerta():void{ //para resetear las alertas
      this.alerta2=false;
      this.alerta1=false;
      this.alerta0='';
  }


     
    cancel():void{
          this.mercancia=null;
    }
  

}
