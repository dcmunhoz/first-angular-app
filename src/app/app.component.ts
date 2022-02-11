import { Component } from '@angular/core';
import { TransferenciaService } from './services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private _service: TransferenciaService;

  public title: string = 'Olá mundo !';  
  public transferenciasAppComponent: any[] = [];
  public mensagemErroAppComponent: string = "";

  constructor(service: TransferenciaService) {
    this._service = service;
  }

  validarErro($event: string){
    this.mensagemErroAppComponent = $event;
  }
}
