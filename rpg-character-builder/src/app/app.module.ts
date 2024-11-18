// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // <-- Import FormsModule for ngModel to work
import { PlayersModule } from './players/players.module';
import { AppComponent } from './app.component';
import { CreateCharacterComponent } from './create-character/create-character.component';  // <-- Import the component

@NgModule({
  declarations: [
    AppComponent,
    CreateCharacterComponent,  // <-- Declare CreateCharacterComponent here
  ],
  imports: [
    BrowserModule,
    FormsModule,  // <-- Add FormsModule here for ngModel
    PlayersModule,
    CreateCharacterModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }



