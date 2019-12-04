import { ThrowStmt } from '@angular/compiler';

export class Cliente {

constructor(id_cliente='',nombre='',telefono='',mail=''){
this.id_cliente=id_cliente;
this.nombre=nombre;
this.telefono=telefono;
this.mail=mail;
}

id_cliente:string;
nombre:string;
telefono:string;
mail:string;

setId(id:string){
this.id_cliente=id;
}
setNombre(name:string){
this.nombre=name;
}
setTelefono(tel:string){
this.telefono=tel;
}
setMail(mail:string){
this.mail=mail;
}

getId(){
    return this.id_cliente;
}
getName()
{return this.nombre;}
getTel()
{return this.telefono;}
getMail()
{return this.mail;}


}
