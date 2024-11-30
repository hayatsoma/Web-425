import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-guild',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <form [formGroup]="guildForm" (ngSubmit)="onSubmit()">
      <label for="guildName">Guild Name</label>
      <input id="guildName" formControlName="guildName" type="text" />
      <div *ngIf="guildForm.get('guildName')?.invalid && guildForm.get('guildName')?.touched">
        Guild name is required.
      </div>

      <label for="description">Description</label>
      <textarea id="description" formControlName="description"></textarea>
      <div *ngIf="guildForm.get('description')?.invalid && guildForm.get('description')?.touched">
        Description is required.
      </div>

      <label for="type">Guild Type</label>
      <select id="type" formControlName="type">
        <option value="" disabled>Select type</option>
        <option value="Competitive">Competitive</option>
        <option value="Casual">Casual</option>
        <option value="Social">Social</option>
        <option value="Educational">Educational</option>
      </select>
      <div *ngIf="guildForm.get('type')?.invalid && guildForm.get('type')?.touched">
        Type is required.
      </div>

      <div class="radio-group">
        <label>
          <input type="radio" formControlName="notificationPreference" value="Email" />
          Email
        </label>
        <label>
          <input type="radio" formControlName="notificationPreference" value="SMS" />
          SMS
        </label>
        <label>
          <input type="radio" formControlName="notificationPreference" value="In-App" />
          In-App
        </label>
      </div>
      <div *ngIf="guildForm.get('notificationPreference')?.invalid && guildForm.get('notificationPreference')?.touched">
        Notification preference is required.
      </div>

      <label class="checkbox-group">
        <input id="acceptTerms" type="checkbox" formControlName="acceptTerms" />
        I accept the terms and conditions
      </label>
      <div *ngIf="guildForm.get('acceptTerms')?.invalid && guildForm.get('acceptTerms')?.touched">
        You must accept the terms.
      </div>

      <button type="submit" [disabled]="guildForm.invalid">Create Guild</button>
    </form>

    <div *ngIf="submittedGuilds.length">
      <h2>Created Guilds</h2>
      <ul>
        <li *ngFor="let guild of submittedGuilds">
          {{ guild.guildName }} - {{ guild.type }} ({{ guild.notificationPreference }})
        </li>
      </ul>
    </div>
  `,
  styles: [`
    form {
      display: flex;
      flex-direction: column;
      gap: 10px;
      max-width: 400px;
      margin: 0 auto;
    }
    label {
      font-weight: bold;
      margin-left:0px;
    }
    input, textarea, select {
      width: 100%;
      padding: 8px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    button {
      padding: 10px;
      background-color: #007BFF;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button[disabled] {
      background-color: #ccc;
      cursor: not-allowed;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      background: #f4f4f4;
      margin: 5px 0;
      padding: 10px;
      border-radius: 4px;
    }
    .radio-group {
  display: flex;
  gap: 20px; /* Space between the radio buttons */
  align-items: center;
}

.radio-group label {
  display: flex;
  align-items: center;
  gap: 10px; /* Space between the circle and text */
}
.checkbox-group {
  display: flex;
  align-items: center;
  gap: 2px; /* Space between the checkbox and the label */
}
.checkbox-group input {
  margin-right: 20px; /* Reduce the default margin on the checkbox */
  margin: 0;
}
.checkbox-group label {
  margin: 0; /* Remove margin from label */
}


  `]
})
export class CreateGuildComponent {
  guildForm: FormGroup;
  submittedGuilds: Array<any> = [];

  constructor(private fb: FormBuilder) {
    this.guildForm = this.fb.group({
      guildName: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      notificationPreference: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    if (this.guildForm.valid) {
      this.submittedGuilds.push(this.guildForm.value);
      this.guildForm.reset();
    }
  }
}
