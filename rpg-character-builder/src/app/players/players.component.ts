import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [ CommonModule ],
  template: `
    <div>
      <h1>Character List</h1>
      <p>Explore our selection of characters, each with unique traits and abilities.</p>
      <ul class="character-container">
        <!-- Use *ngFor to loop through characters -->
        <li class="character-card" *ngFor="let character of characters">
          <div class="card">
            <h3>{{ character.name }}</h3>
            <p><strong>Gender:</strong> {{ character.gender }}</p>
            <p><strong>Class:</strong> {{ character.class }}</p>
            <p><strong>Faction:</strong> {{ character.faction }}</p>
            <p><strong>Starting Location:</strong> {{ character.startingLocation }}</p>
            <p><strong>Fun Fact:</strong> {{ character.funFact }}</p>
          </div>
        </li>
      </ul>
    </div>
  `,
  styles: [
    `
      .character-container {
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
      }
      .character-card {
        flex: 0 1 calc(33.33% - 20px);
        margin: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
      .card {
        padding: 20px;
        background-color: white;
      }
    `
  ]
})
export class PlayersComponent {
  characters = [
    {
      name: 'Thorn',
      gender: 'Male',
      class: 'Warrior',
      faction: 'The Iron Brotherhood',
      startingLocation: 'Ironhold',
      funFact: 'Thorn once single-handedly defeated a dragon.'
    },
    {
      name: 'Lyria',
      gender: 'Female',
      class: 'Mage',
      faction: 'The Silver Circle',
      startingLocation: 'Silverpeak',
      funFact: 'Lyria can control the weather with her magic.'
    },
    {
      name: 'Kael',
      gender: 'Male',
      class: 'Rogue',
      faction: 'The Shadows',
      startingLocation: 'Nightfall Hollow',
      funFact: 'Kael can move so silently that even the wind cannot hear him.'
    },
    {
      name: 'Selena',
      gender: 'Female',
      class: 'Mage',
      faction: 'The Enchanted Order',
      startingLocation: 'Mystic Forest',
      funFact: 'Selena can summon creatures from other realms.'
    },
    {
      name: 'Aric',
      gender: 'Male',
      class: 'Warrior',
      faction: 'The Iron Brotherhood',
      startingLocation: 'Steelhold',
      funFact: 'Aric is immune to poison.'
    },
    {
      name: 'Nadia',
      gender: 'Female',
      class: 'Rogue',
      faction: 'The Thieves Guild',
      startingLocation: 'Darkwater',
      funFact: 'Nadia has a knack for picking locks.'
    },
    {
      name: 'Vorn',
      gender: 'Male',
      class: 'Warrior',
      faction: 'The Frostborn',
      startingLocation: 'Glacier Peak',
      funFact: 'Vorn once fought a bear bare-handed and won.'
    },
    {
      name: 'Fiona',
      gender: 'Female',
      class: 'Mage',
      faction: 'The Celestial Order',
      startingLocation: 'Sunspire',
      funFact: 'Fiona can heal wounds with just a touch.'
    },
    {
      name: 'Jarek',
      gender: 'Male',
      class: 'Rogue',
      faction: 'The Silent Blades',
      startingLocation: 'Shadowport',
      funFact: 'Jarek never misses a shot with his bow.'
    },
    {
      name: 'Elara',
      gender: 'Female',
      class: 'Mage',
      faction: 'The Arcanum',
      startingLocation: 'Starfall Tower',
      funFact: 'Elara can manipulate time for brief moments.'
    }
  ];
}
