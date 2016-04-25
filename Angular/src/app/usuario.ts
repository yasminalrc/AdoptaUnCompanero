import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';

export class Usuario{
    constructor(
    
      private nombre: string,
      private contraseña: string,
      

    
      getNombre(){
        return this.nombre;
      }

      setNombre(nom: string){
        this.nombre = nom;
      }

    

      getContraseña(){
        return this.contraseña;
      }

      setContraseña(contraseña: string){
        this.contraseña = contraseña;
      }

    

}

@Injectable()
export class UsuarioService{

    private usuarios = [
      new Usuario('User','1234'),
     new Usuario('User2','1234')
     ]

    getInfo(nombre: string){
      for(let i=0; i<this.usuarios.length; i++){
          if(this.usuarios[i].getNombre() === nombre){
              return withObserver(this.usuarios[i]);
          }
      }

    }

    saveUser(usuario: Usuario){
        if(usuario.getNombre()){
          for(let i=0; i<this.usuarios.length; i++){
              if(this.usuarios[i].getNombre() === usuario.getNombre()){
                  let oldUser = this.usuarios[i];
                  oldUser.setNombre(usuario.getNombre());
                  oldUser.setContraseña(usuario.getContraseña());
                  break;
              }

          }
        }else{
          usuario.setNombre(this.usuarios.length + 1);
          let nUser = this.usuarios.push(usuario);
        }
        return withObserver(usuario);
    }

    removeUser(usuario: Usuario){
      for(let i=0; i<this.usuarios.length; i++){
          if(this.usuarios[i].getNombre() === usuario.getNombre()){
            this.usuarios.splice(i,1);
            break;
          }
      }
      return withObserver(undefined);
    }

}
