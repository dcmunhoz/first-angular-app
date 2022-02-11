import { Component, Input, OnInit } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';
import { Transferencia } from './../models/transferencia.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  public transferenciasInput: any[] = [];

  private _service: TransferenciaService;

  constructor(service: TransferenciaService) {
    this._service = service;
  }

  ngOnInit(): void {
    this._service.todas().subscribe((transferencias: Transferencia[]) => {
      console.table(transferencias);
      this.transferenciasInput = transferencias;
    });
  }

}
