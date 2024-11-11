import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-players',
  standalone: true,  // Make this a standalone component
  imports: [CommonModule],  // Add CommonModule here
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
})
export class PlayersComponent {
  characters = [
    { name: "Thorn", gender: "Male", class: "Warrior", faction: "The Iron Brotherhood", startingLocation: "Ironhold", funFact: "Thorn once single-handedly defeated a dragon." },
    { name: "Elara", gender: "Female", class: "Mage", faction: "The Arcane Order", startingLocation: "Arcadia", funFact: "Elara can speak to animals." },
    // Add more characters here
  ];
}
