import { Component, OnInit } from '@angular/core';
import { OperacionesService } from '../servicios/operaciones.service';
import { NgForm } from '@angular/forms';
import { Mercancia } from '../clases/mercancia';

@Component({
  selector: 'app-salida',
  templateUrl: './salida.component.html',
  styleUrls: ['./salida.component.css']
})
export class SalidaComponent implements OnInit {

  constructor(private o: OperacionesService) { }

  ngOnInit() {
  }

  getMercancia(formulario:NgForm){
    console.log(formulario.value);
    if(formulario.value._id){
      this.o.buscarMerca(formulario.value._id).subscribe(res =>{
        this.o.m= res as Mercancia ;
        console.log(res);
        formulario.reset();
      })  ;
    }

  }

}
