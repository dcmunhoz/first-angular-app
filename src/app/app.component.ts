import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'Olá mundo !';  
  public transferenciasAppComponent: any[] = [];
  public mensagemErroAppComponent: string = "";
  
  transferir($event: any)
  {

    let transferencia = { ...$event, data: new Date() };
    this.transferenciasAppComponent.push(transferencia);
    console.log($event);
    console.log(this.transferenciasAppComponent);
  }

  validarErro($event: string){
    this.mensagemErroAppComponent = $event;
  }

}
