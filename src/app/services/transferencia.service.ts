import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencias: any[] = [];

  constructor() { }

  get transferencias(){
    return this.listaTransferencias;
  }

  adicionar(transferencia: any){
    this.hidratar(transferencia);
    this.listaTransferencias.push(transferencia);
  }

  hidratar(transferencia: any){
    transferencia.data = new Date();
  }
}
