import { Injectable } from '@angular/core';
import { Posicion } from '../clases/posicion';
import { Mercancia } from '../clases/mercancia';

@Injectable({
  providedIn: 'root'
})
export class BodegaService {
  lista_posicion:Posicion[];
  lista_mercancia:Mercancia[];

  constructor() { 
    this.lista_posicion=[
      {id_mercancia:'1', id_posicion:'#1', disponibilidad:false },
      {id_mercancia:'2', id_posicion:'#2', disponibilidad:true },
      {id_mercancia:'3', id_posicion:'#3', disponibilidad:true },
      {id_mercancia:'4', id_posicion:'#4', disponibilidad:true },
      {id_mercancia:'5', id_posicion:'#5', disponibilidad:true },
      {id_mercancia:'6', id_posicion:'#6', disponibilidad:true },
      {id_mercancia:'7', id_posicion:'#7', disponibilidad:true },
      {id_mercancia:'8', id_posicion:'#8', disponibilidad:true },
      {id_mercancia:'9', id_posicion:'#9', disponibilidad:false },
      {id_mercancia:'10', id_posicion:'#10', disponibilidad:false}
    ];
  }
}
