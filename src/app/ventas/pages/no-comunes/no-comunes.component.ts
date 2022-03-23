import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {



  // i18nSelect
  nombre: string = 'Pedro';
  // nombre: string = 'Elena';
  genero: string = 'masculino';
  // genero: string = 'femenino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }
  
  
  
  // i18nPlural
  clientes: string[] = ['Pedro','Elena','Alex','Carlota','Max'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente',
    '=1': 'tenemos 1 cliente',
    // '=2': 'tenemos 2 clientes',
    'other': 'tenemos # clientes'
  }



  cambiarCliente() {
    if (this.genero === 'masculino') {
        this.genero = 'femenino';
        this.nombre = 'Elena'
    }
    else {
        this.genero = 'masculino';
        this.nombre = 'Pedro'
    }
  }

  borrarCliente() {
    this.clientes.splice(0,1);
  }


  // KeyValue Pipes
  persona = {
    nombre: 'Pedro',
    edad: 37,
    direccion: 'Sant Julià de Ramis, Girona'
  }

  // JSON Pipes
  heroes = [
    { 
      nombre: 'Superman',
      vuela: true
    },
    { 
      nombre: 'Robin',
      vuela: false
    },{ 
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  // Async Pipes
  miObservable = interval(3500); // 0,1,2,3,4,5,6...
  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() =>{
      resolve( 'Tenemos data de promesa');
    }, 3500 );
  })

}
