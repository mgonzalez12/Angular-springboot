import { Cliente } from './cliente';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from './cliente.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  public cliente:Cliente = new Cliente();
  public titulo:string = 'crear cliente';

  constructor(private clienteService: ClienteService, private router:Router) { }

  ngOnInit(): void {
  }

  public create(): void{
    this.clienteService.create(this.cliente)
    .subscribe( cliente => {
      this.router.navigate(['/clientes'])
      Swal.fire(
        'Nuevo Cliente!',
        'Cliente Creado con éxito!',
        'success'
      )
    }
    )
  }

}
