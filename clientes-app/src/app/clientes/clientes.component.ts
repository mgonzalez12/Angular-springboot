import { ClienteService } from './cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {


  clientes: Cliente[];
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
     this.clienteService.getCliente().subscribe(
       clientes => this.clientes = clientes
     );
  }

}
