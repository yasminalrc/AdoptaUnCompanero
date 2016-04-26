import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';

export class Mascota {

  especie: string;
  tamaño: string;
  raza: string;
  edad: string;
  sexo: string;
  fecha: string;

  constructor (especie: string, tamaño: string, raza: string, edad: string, sexo: string, fecha: string){
    this.especie = especie;
    this.tamaño = tamaño;
    this.raza = raza;
    this.edad = edad;
    this.sexo = sexo;
    this.fecha = fecha;
  }

  getEspecie(){
    return this.especie;
  }

  setEspecie(especie: string){
    this.especie = especie;
  }

  getTamaño(){
    return this.tamaño;
  }

  setContraseña(tamaño: string){
    this.tamaño = tamaño;
  }

  getRaza(){
    return this.raza;
  }

  setRaza(raza: string){
    this.raza = raza;
  }

  getEdad(){
    return this.edad;
  }

  setEdad(raza: string){
    this.edad = edad;
  }

  getSexo(){
    return this.sexo;
  }

  setSexo(sexo: string){
    this.sexo = sexo;
  }

  getFecha(){
    return this.fecha;
  }

  setFecha(fecha: string){
    this.fecha = fecha;
  }

  @Injectable()
  export class MascotaService{

  private mascotas = [
  new Mascota('Perro','Pequeño','Carlino','2 años','Macho','22/3/16'),
  new Mascota('Gato','Normal','Egipcio','2 años','Hembra','12/4/16')
  ]
 }

}
