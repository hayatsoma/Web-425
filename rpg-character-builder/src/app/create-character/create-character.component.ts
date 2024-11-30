import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-character',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div>
      <h2>Create Character</h2>
      <form #characterForm="ngForm" (ngSubmit)="addCharacter()">
        <label for="name">Name</label>
        <input id="name" name="name" type="text" [(ngModel)]="name" required />

        <label for="gender">Gender</label>
        <select id="gender" name="gender" [(ngModel)]="gender" required>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label for="class">Class</label>
        <select id="class" name="class" [(ngModel)]="charClass" required>
          <option value="Warrior">Warrior</option>
          <option value="Mage">Mage</option>
          <option value="Rogue">Rogue</option>
        </select>

        <button type="submit" [disabled]="!characterForm.valid">Add Character</button>
        <button type="button" (click)="resetForm(characterForm)">Reset</button>
      </form>

      <h3>Created Characters</h3>
      <ul>
        <li *ngFor="let char of characters">
          <p>Name: {{ char.name }}</p>
          <p>Gender: {{ char.gender }}</p>
          <p>Class: {{ char.class }}</p>
          <p>ID: {{ char.id }}</p>
        </li>
      </ul>
    </div>
  `,
  styles: [`
    h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    form {
      display: flex;
      flex-direction: column;
      width: 300px;
    }

    form label {
      margin-top: 0.5rem;
    }

    form input, form select {
      padding: 0.5rem;
      margin-bottom: 1rem;
    }

    button {
      margin-top: 1rem;
    }
  `]
})
export class CreateCharacterComponent {
  characters: any[] = [];
  name: string = '';
  gender: string = '';
  charClass: string = '';

  generateRandomId(): number {
    return Math.floor(Math.random() * 1000) + 1; // Generates random integer between 1 and 1000
  }

  addCharacter() {
    const newCharacter = {
      id: this.generateRandomId(),
      name: this.name,
      gender: this.gender,
      class: this.charClass
    };
    this.characters.push(newCharacter);
  }

  resetForm(form: any) {
    form.reset();
    this.name = '';
    this.gender = '';
    this.charClass = '';
  }
}
