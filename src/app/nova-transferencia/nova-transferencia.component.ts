import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: [ './nova-transferencia.component.scss' ]
})
export class NovaTransferenciaComponent 
{ 
    @Output() aoTransferir = new EventEmitter<any>();    
    @Output() aoValidarErro = new EventEmitter<string>();

    public valor: number = 0;
    public destino: string = "";

    constructor(private _service: TransferenciaService){
        
    }

    transferir() {
        console.log(`Solicitado nova transferência \n\rValor: ${this.valor} \n\rDestino: ${this.destino}`);             
        
        if (this.ehValido()) {
            let transferencia: Transferencia = { valor: this.valor, destino: this.destino };
            this._service.adicionar(transferencia).subscribe(result => {
                console.log(result);
                this.limparCampos();            
            }, erro => {
                console.error(erro);
            });
        }
        
    }

    ehValido(){
        if (this.valor <= 0) {
            this.aoValidarErro.emit("Valor não pode ser menor ou igual a zero !");
            return false;
        }

        return true;
    }

    limparCampos() {
        this.valor = 0;
        this.destino = "";
        this.aoValidarErro.emit("");
    }

}