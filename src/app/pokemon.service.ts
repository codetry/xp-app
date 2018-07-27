import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

@Injectable()
export class PokemonService {

  private urlPokemon: string = 'https://pokeapi.co/api/v2';
  private pokemons:any = [];
  private pokemonMostrar:any = [];
  private promises = [];
  constructor(public http: Http) {}

  obtenerPokemonsNtional(){
    let url=`${this.urlPokemon}/pokedex/1/`;

    let headers = new Headers({
      'User-Agent': 'cheese'
    });
   return this.http.get(url).map(res => {
      return res.json();
    });
  }

  obtenerpokemons(){
    let url=`${this.urlPokemon}/pokemon`;
    return this.http.get(url).map(res => {
      return res.json();
    });
  }

  getMadpokemons(url){
    return this.http.get(url).map(res => {
      return res.json();
    });
  }

  arrayMostrar(currentPokemons, currentNationalPokemons){
    let globalScope=this;
    let promise= new Promise(function (resolve, reject) {

      for (let u of currentPokemons.pokemons){
        let posicion = currentNationalPokemons.indexOf(u.name);

        if (posicion >= 0){
          globalScope.http.get(u.url).map(res => {
            return res.json();
          }).subscribe(resp => {
            globalScope.pokemonMostrar.push(resp);
          });
        }
      }
        resolve(globalScope.pokemonMostrar);
    });

    return promise;
  }

  getPoke( idx: string ){
    return this.pokemonMostrar[idx];
  }

  species( url ){
   return this.http.get(url).map(res => {
      return res.json();
    });
  }
}
