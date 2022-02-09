import { Component } from '@angular/core';

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: [ './nova-transferencia.component.scss' ]
})
export class NovaTransferenciaComponent 
{ 
    public valor: number = 0;
    public destino: string = "";



    transferir() {
        console.log(`Solicitado nova transferência \n\rValor: ${this.valor} \n\rDestino: ${this.destino}`);             
    }

}