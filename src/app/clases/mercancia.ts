export class Mercancia {
    constructor(id='', nombre='', tipo_mercancia='', cantidad_mal_estado='', cantidad_buen_estado='',
      f_entrada='', fecha_caducidad='', responsable='', id_client='', telefono='', mail='', serial_container='',f_salida=''){
          this._id=id;
          this.nombre=nombre; 
          this.tipo_mercancia=tipo_mercancia;
          this.cantidad_mal_estado=cantidad_mal_estado;
          this.cantidad_buen_estado=cantidad_buen_estado;
          this.f_entrada=f_entrada;
          this.fecha_caducidad=fecha_caducidad;
          this.responsable=responsable;
          this.id_client=id_client;
          this.telefono=telefono;
          this.mail=mail;
          this.serial_container=serial_container;
          this.f_salida=f_salida;
    }
    _id:string;
    nombre:string;
    tipo_mercancia:string;
    cantidad_mal_estado:string;
    cantidad_buen_estado:string;
    f_entrada:string;
    fecha_caducidad:string;
    responsable:string;
    id_client:string;
    telefono:string;
    mail:string;
    serial_container:string;
    f_salida:string;



     
}