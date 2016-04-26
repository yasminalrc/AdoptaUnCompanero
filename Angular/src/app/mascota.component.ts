import {Component}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {MascotaService} from '.Angular/src/app/mascota.service';
import {Mascota} from './mascota.service';

@Component({
    directives: [ROUTER_DIRECTIVES],
    templateUrl: '.Angular/src/app/mascota.component.html',
    providers:  [UsuarioService]
})
export class UsuarioComponent{

    mascota: Mascota;

    constructor(private router:Router, private service: UsuarioService) {}



}
