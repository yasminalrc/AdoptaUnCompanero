import {Component}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {UsuarioService} from '.Angular/src/app/usuario.service';
import {Usuario} from './usuario.service';

@Component({
    directives: [ROUTER_DIRECTIVES],
    templateUrl: '.Angular/src/app/usuario.component.html',
    providers:  [UsuarioService]
})
export class UsuarioComponent{

    usuario: Usuario;

    constructor(private router:Router, private service: UsuarioService) {}



}
