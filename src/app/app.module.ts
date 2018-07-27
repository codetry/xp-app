import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AllPokemonComponent } from './components/all-pokemon/all-pokemon.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { HeaderComponent } from './components/comun/header/header.component';
import { FooterComponent } from './components/comun/footer/footer.component';

import { PokemonService } from './pokemon.service';

import { APP_ROUTING } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    AllPokemonComponent,
    PokemonComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
