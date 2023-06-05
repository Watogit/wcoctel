import { Component } from '@angular/core';
import { CoctelService } from 'src/app/services/coctel.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  busqueda: string="";
  coctelesEncontrados: any;

  constructor(private coctelService: CoctelService){}

  buscarCoctel(){
    this.coctelService.getCocktailsName(this.busqueda).subscribe(response => {
      this.coctelesEncontrados = response.drinks;
    console.log(this.coctelesEncontrados)})
  }
}
