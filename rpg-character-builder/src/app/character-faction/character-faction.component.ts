import { Component } from '@angular/core';

@Component({
  selector: 'app-character-faction',
  standalone: true,
  imports: [],
  template: `
    <h2>Character Faction</h2>
    <p>Choose your faction and join the battle!</p>
  `,
  styles: [`
    h2 {
      color: red;
    }
  `]
})
export class CharacterFactionComponent {}
