import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  textoFinal: any;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  cargar(texto: any){
    this.textoFinal = texto;
  }

  buscar(){
    if(this.textoFinal == null || this.textoFinal == ''){
      this.textoFinal = "null";
    }

    this.route.navigate(['/busqueda', this.textoFinal])
  }

  regresar(){
    this.route.navigate(['/heroes']);
  }

}
