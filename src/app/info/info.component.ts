import { Component, OnInit } from '@angular/core';
import { BodegaService } from '../servicios/bodega.service';
import { OperacionesService } from '../servicios/operaciones.service';
import { NgForm } from '@angular/forms';
import { Mercancia } from '../clases/mercancia';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor( private o: OperacionesService,
              private b:BodegaService) {  }

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
  getMercancia(formulario:NgForm){
    console.log(formulario.value._id);
     
      this.o.buscarMerca(formulario.value._id).subscribe(res =>{
       
      this.mercancia=res as Mercancia ;
        console.log(res);
         formulario.reset();
       

      })  ;
   
  }
  SaveDemo() {
    let a= document.getElementsByTagName("table")
    let file = new File([(''+a[0].innerText)], "test.xls" ,{ type: 'text/plain;charset=utf-8' });
    saveAs(file)
    
  }

  cancel(m:Mercancia){

   m=new Mercancia();
    
   this.mercancia=m;
    
  }
  
  mercancia:Mercancia;
}
