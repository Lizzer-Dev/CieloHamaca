import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-log',
  templateUrl: './navbar-log.component.html',
  styleUrls: ['./navbar-log.component.css']
})
export class NavbarLogComponent implements OnInit {
  idioma="ES";
  idPrin="Idioma"
  constructor() { }

  ngOnInit(): void {
  }
  getIdiomaES(){
    this.idioma="ES";
    this.idPrin="Idioma"
  }
  getIdiomaUS(){
    this.idioma="US";
    this.idPrin="Language"
  }
  getIdiomaMY(){
    this.idioma="Maya";
    this.idPrin="T'aano'";
  }

}
