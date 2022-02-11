import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transferencia } from './../models/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencias: any[] = [];
  private apiUrl = "http://localhost:3000/transferencias";

  constructor(private api: HttpClient) { 



  }

  get transferencias(){
    return this.listaTransferencias;
  }

  todas(): Observable<Transferencia[]>{
    return this.api.get<Transferencia[]>(this.apiUrl);
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia>{
    this.hidratar(transferencia);
    return this.api.post<Transferencia>(this.apiUrl, transferencia);
  }

  hidratar(transferencia: any){
    transferencia.data = new Date();
  }
}
