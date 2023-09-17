import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string = "https://geekflare.com/wp-content/uploads/2023/03/Placeholder-Image-Generator--1200x385.png"
  contentTitle:string="Minha Noticia"
  contentDescription:string="Olá Mundo!"



  constructor(){

  }

  ngOnInit(): void {

  }

}


