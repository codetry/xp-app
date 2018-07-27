import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PokemonService} from '../../pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})

export class PokemonComponent{

  public pokemon:any = {};
  public specie:any;

  constructor(private pokeServ: PokemonService,
              private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe( params =>{
      this.pokemon = this.pokeServ.getPoke( params['idx'] );
      this.pokeServ.species(this.pokemon.species.url)
        .subscribe(resp => {
          this.specie = resp;
        });
    });
  }
}
