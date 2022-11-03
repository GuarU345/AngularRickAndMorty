import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyServiceService {

  constructor(private httpclient:HttpClient) { }

  getData(page:any){
   return this.httpclient.get(`https://rickandmortyapi.com/api/character?page=${page}`)
  }
}
