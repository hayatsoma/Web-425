import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [],
  template: `
    <h2>Sign In</h2>
    <form>
      <label for="username">Username:</label>
      <input id="username" type="text">
      <label for="password">Password:</label>
      <input id="password" type="password">
      <button type="submit">Sign In</button>
    </form>
  `,
  styles: [`
    form {
      display: flex;
      flex-direction: column;
    }
    label {
      margin: 5px 0;
    }
  `]
})
export class SigninComponent {}
