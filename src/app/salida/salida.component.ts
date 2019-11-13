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

  getMercancia(formulario:NgForm){
    console.log(formulario.value._id);
     
      this.o.buscarMerca(formulario.value._id).subscribe(res =>{
        this.mercancia= res as Mercancia ;
      //this.mercancia=this.o.m;
        console.log(res);
         formulario.reset();
       

      })  ;
     
   
  }
  edit(mercancia: Mercancia){
this.o.m=mercancia;
  
console.log(this.o.m);
  }
  editarMercancia( formulario?:NgForm ){
    if(formulario.value._id){  
    this.o.editarMerca(formulario.value).subscribe(res=>{
        
      console.log(formulario.value);
      console.log(res);
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

mercancia:Mercancia;
  
 

}
