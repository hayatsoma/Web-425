import { Component } from '@angular/core';

@Component({
  selector: 'app-create-character',
  standalone: true,
  imports: [],
  template: `
    <h2>Create Character</h2>
    <p>Here you can create a new character.</p>
  `,
  styles: [`
    h2 {
      color: green;
    }
  `]
})
export class CreateCharacterComponent {}
