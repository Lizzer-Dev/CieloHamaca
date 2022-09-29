import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
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
