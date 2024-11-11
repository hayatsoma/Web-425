// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlayersModule } from './players/players.module';  // Import the PlayersModule

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],  // Declare your main app component
  imports: [BrowserModule, PlayersModule],  // Import the PlayersModule here
  bootstrap: [AppComponent],
})
export class AppModule { }
