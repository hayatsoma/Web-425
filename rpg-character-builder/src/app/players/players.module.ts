// src/app/players/players.module.ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PlayersComponent } from './players.component'; // Adjust path if necessary

@NgModule({
  declarations: [PlayersComponent],  // Declare the PlayersComponent here
  imports: [CommonModule],  // Import CommonModule to use *ngFor and other common directives
})
export class PlayersModule { }
