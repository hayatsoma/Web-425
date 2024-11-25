import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService} from './auth.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="container">
      <!-- Header with Navigation -->
      <header>
        <nav>
          <ul>
            <li><a routerLink="/signin">Sign In</a></li>
            <li><a routerLink="/players">Players</a></li>
            <li><a routerLink="/create-character">Create Character</a></li>
            <li><a routerLink="/create-guild">Create Guild</a></li>
            <li><a routerLink="/character-faction">Character Faction</a></li>
          </ul>
        </nav>
      </header>

      <!-- Main Content Area -->
      <main>
        <div class="sign-in-container">
          <!-- Conditional Rendering for Sign-In/Sign-Out -->
          <div *ngIf="email; else showSignIn">
            <p>Welcome, {{ email }}!</p>
            <button (click)="signout()">Sign Out</button>
          </div>
          <ng-template #showSignIn>
            <a routerLink="/signin" class="sign-in-link">Sign In</a>
          </ng-template>
        </div>

        <router-outlet></router-outlet>
      </main>

      <!-- Footer with Mirrored Navigation -->
      <footer>
        <nav>
          <ul>
            <li><a routerLink="/signin">Sign In</a></li>
            <li><a routerLink="/players">Players</a></li>
            <li><a routerLink="/create-character">Create Character</a></li>
            <li><a routerLink="/create-guild">Create Guild</a></li>
            <li><a routerLink="/character-faction">Character Faction</a></li>
          </ul>
        </nav>
      </footer>
    </div>
  `,
  styles: [
    /* General Container */
    `.container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      font-family: Arial, sans-serif; /* Default font */
    }`,

    /* Header Styling */
    `header {
      background-color: #4a90e2;
      padding: 10px 0;
      font-family: 'Courier New', Courier, monospace; /* Second font style */
    }

    header nav ul {
      list-style: none;
      display: flex;
      justify-content: center;
      gap: 20px;
    }

    header nav ul li a {
      text-decoration: none;
      color: white;
      font-weight: bold;
    }`,

    /* Main Content Area Styling */
    `main {
      flex: 1;
      padding: 20px;
      background-color: #f4f4f9;
      color: #333;
      font-family: Georgia, serif; /* Third font style */
    }`,

    /* Footer Styling */
    `footer {
      background-color: #4a90e2;
      padding: 10px 0;
      color: white;
      font-family: 'Courier New', Courier, monospace;
    }

    footer nav ul {
      list-style: none;
      display: flex;
      justify-content: center;
      gap: 20px;
    }

    footer nav ul li a {
      text-decoration: none;
      color: white;
      font-weight: bold;
    }`
  ]
})
export class AppComponent {
  title = 'rpg-character-builder';
  email: string | null = null; // This will be populated with user email if logged in

  // Simulated sign-out method
  signout() {
    this.email = null;
  }
}
