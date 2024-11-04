import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayersComponent } from './players/players.component';
import { SigninComponent } from './signin/signin.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { CreateGuildComponent } from './create-guild/create-guild.component';
import { CharacterFactionComponent } from './character-faction/character-faction.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent  // Default route
  },
  {
    path: 'home',
    component: HomeComponent  // Home route
  },
  {
    path: 'players',
    component: PlayersComponent // Route for players component
  },
  {
    path: 'signin',
    component: SigninComponent  // Route for signin component
  },
  {
    path: 'create-character',
    component: CreateCharacterComponent // Route for create character component
  },
  {
    path: 'create-guild',
    component: CreateGuildComponent // Route for create guild component
  },
  {
    path: 'character-faction',
    component: CharacterFactionComponent // Route for character faction component
  },
  {
    path: '**', // Wildcard route for a 404 page
    redirectTo: 'home'
  }
];
