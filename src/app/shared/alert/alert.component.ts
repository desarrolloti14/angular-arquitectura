import { Component, Injectable, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
})
@Injectable({
  providedIn: 'root' 
})
export class AlertComponent implements OnInit {
  public alert: String = "Sin nada"
  public show: Boolean = false
  @Input() data: any
  
  constructor() { }

  ngOnInit(): void {
  }

  //Texto de la alerta 
  alertShow(text: String, time: any): any {
    this.show = true
    this.alert = text
    console.log(this.show)
    console.log(this.alert)
    setTimeout(() => {
      this.alert = "Hola"
      this.show = false
      console.log(this.show)
      console.log(this.alert)
    }, (time * 3000));
  }
}
