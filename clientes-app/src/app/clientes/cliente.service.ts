import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';
import { Injectable } from '@angular/core';
import { DatePipe, formatDate } from '@angular/common';
import { Observable, of,throwError} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map,catchError,tap} from 'rxjs/operators';
import Swal from 'sweetalert2';
import {Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private urlEndPoint:string = "http://localhost:8080/api/clientes";
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http: HttpClient, private router: Router) { }

<<<<<<< HEAD
  getCliente(page:number): Observable<any>{
    return this.http.get(this.urlEndPoint+'/page/'+ page).pipe(
      tap((response:any) => {
        console.log("ClienteService: Tap 1");
        (response.content as Cliente[]).forEach( cliente => {
          console.log(cliente.nombre);
        })
      }),
      map( (response:any) => {
        (response.content as Cliente[]).map(cliente => {
            cliente.nombre = cliente.nombre.toUpperCase();
            return cliente;
        });
        return response;
      }),
      tap(response => {
        console.log('ClienteService: Tap 2');
        (response.content as Cliente[]).forEach(cliente => {
          console.log(cliente.nombre)
        })
      })
=======
  getCliente(): Observable<Cliente[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map( response => {
       
       let clientes = response as Cliente[];
       return clientes.map( cliente => {
         cliente.nombre = cliente.nombre.toUpperCase();
         let dataPipe = new DatePipe('es');
         //cliente.createAt = formatDate(cliente.createAt,'dd/MM/yyyy','en-US');
         cliente.createAt = dataPipe.transform(cliente.createAt,'EEEE dd, MM yyyy');
         return cliente;
       });
      }
      )
>>>>>>> 39e05b4f75b52036a8d5dc5efe28b72d22879007
    );
  }

  create( cliente: Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.urlEndPoint, cliente, {headers:this.httpHeaders}).pipe(
      map( (response:any) => response.cliente as Cliente),
      catchError( e => {

        if(e.status==400){
          return throwError(e);
        }

        console.log(e.error.mensaje);
        Swal.fire({
          icon: 'error',
          title: 'Oops...'+e.error.mensaje,
          text: e.error.error
        })
        return throwError(e);
      })
    );
  }

  getClient(id):Observable<Cliente>{
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`).pipe(
      catchError ( e => {
        this.router.navigate(['/clientes']);
        console.log(e.error.mensaje);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: e.error.mensaje
        })
        return throwError(e);
      })
    );
  }

  update(cliente: Cliente):Observable<any>{
    return this.http.put<any>(`${this.urlEndPoint}/${cliente.id}`,cliente,{headers: this.httpHeaders}).pipe(
      catchError( e => {
        
        if(e.status==400){
          return throwError(e);
        }

        console.log(e.error.mensaje);
        Swal.fire({
          icon: 'error',
          title: 'Oops...'+e.error.mensaje,
          text: e.error.error
        })
        return throwError(e);
      })
    );
  }

  delete(id:number):Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`,{headers: this.httpHeaders}).pipe(
      catchError( e => {
        console.log(e.error.mensaje);
        Swal.fire({
          icon: 'error',
          title: 'Oops...'+e.error.mensaje,
          text: e.error.error
        })
        return throwError(e);
      })
    );
  }
}
