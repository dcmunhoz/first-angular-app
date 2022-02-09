import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'Olá mundo !';  
  public transferencia: any = {};
  public mensagemErro: string = "";
  
  transferir($event: any)
  {
    this.transferencia = { ...$event };
    console.log($event);
    console.log(this.transferencia);
  }

  validarErro($event: string){
    this.mensagemErro = $event;
  }

}
