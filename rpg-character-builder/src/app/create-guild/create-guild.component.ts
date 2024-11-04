import { Component } from '@angular/core';

@Component({
  selector: 'app-create-guild',
  standalone: true,
  imports: [],
  template: `
    <h2>Create Guild</h2>
    <p>Establish a new guild and recruit members!</p>
  `,
  styles: [`
    h2 {
      color: purple;
    }
  `]
})
export class CreateGuildComponent {}
