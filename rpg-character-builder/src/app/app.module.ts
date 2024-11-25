// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // <-- Import FormsModule for ngModel to work
import { ReactiveFormsModule } from '@angular/forms';  // <-- Import ReactiveFormsModule for formGroup
import { PlayersModule } from './players/players.module';
import { AppComponent } from './app.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCharacterComponent,
    SigninComponent  // <-- Add the missing comma here
  ],
  imports: [
    BrowserModule,
    FormsModule,  // <-- Add FormsModule here for ngModel
    PlayersModule,
    ReactiveFormsModule,  // <-- Ensure ReactiveFormsModule is imported here
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
