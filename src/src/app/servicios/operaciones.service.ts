import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Mercancia } from '../clases/mercancia';

 
@Injectable({
  providedIn: 'root'
})
export class OperacionesService {
  l:Mercancia[];
   
  m:Mercancia;
  
  ruta = "http://localhost:3000/index";
  constructor(private http : HttpClient) { 
    this.m = new Mercancia();
    
  }
  getMerca(){
    return this.http.get(this.ruta);
  }
  crear(mercancia: Mercancia ){
    return this.http.post(this.ruta, mercancia);
    }

    eliminar(_id: string){
      return this.http.delete(this.ruta);
          }
     
    buscarMerca(id:string){
      return this.http.get(this.ruta + `/${id}`);
    }      


}
