import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart-card',
  templateUrl: './smart-card.component.html',
  styleUrls: ['./smart-card.component.css']
})
export class SmartCardComponent {

  @Input()
  photoCover:string = ""
  @Input()
  cardTitle:string = ""



  constructor(){

  }

 ngOnInit(): void {


 }

}
