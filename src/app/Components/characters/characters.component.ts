import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Personaje } from '../Models/api';
import { RickandmortyServiceService } from '../rickandmorty-service.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private service:RickandmortyServiceService) { }

  personajes:Personaje[]|undefined;

  page=1

  ngOnInit(): void {
    this.service.getData(this.page).subscribe((data:any)=>{
         this.personajes=data.results
    })
  }
  nextPage(){
      this.service.getData(this.page+1).subscribe((data:any)=>{
        this.personajes=data.results
        console.log(this.personajes)
   })
  }
}
