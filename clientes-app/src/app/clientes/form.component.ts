import { Cliente } from './cliente';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from './cliente.service';
import { Router,ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  public cliente:Cliente = new Cliente();
  public titulo:string = 'crear cliente';

  constructor(private clienteService: ClienteService, private router:Router, 
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarCliente();
  }
  cargarCliente(): void{
    this.activateRoute.params.subscribe( params => {
      let id = params['id']
      if(id){
        this.clienteService.getClient(id).subscribe( (cliente) => this.cliente = cliente)
      }
    })
  }

  public create(): void{
    this.clienteService.create(this.cliente)
    .subscribe( cliente => {
      this.router.navigate(['/clientes'])
      Swal.fire(
        'Nuevo Cliente!',
        `Cliente ${cliente.nombre} Creado con éxito!`,
        'success'
      )
    }
    )
  }

  public update():void {
    this.clienteService.update(this.cliente)
    .subscribe( cliente => {
      this.router.navigate(['/clientes'])
      Swal.fire(
        'Cliente Actualizado!',
        `El Cliente ${cliente.nombre} actualizado con éxito!`,
        'success'
      )
    })
  }

}
