import { Component, OnInit } from '@angular/core';
import { Mercancia } from '../clases/mercancia';
import { OperacionesService } from '../servicios/operaciones.service';
import { Posicion } from '../clases/posicion';

import { BodegaService } from '../servicios/bodega.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
 
  constructor( private o: OperacionesService,
                private b:BodegaService) {  }
  posi:Posicion;
   
  
  
  
  ngOnInit() {
    this.listar();
   
   
  }
  

  listar(){
    this.o.getMerca()
      .subscribe(res => {
        //this.o.l = res as Mercancia[];
        this.b.lista_mercancia=res as Mercancia[];
        console.log(res);
      });
  }
  abrir(a:Posicion):void{
    this.posi=a;
           }
  
}
