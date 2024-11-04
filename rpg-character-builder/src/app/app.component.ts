import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

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
  styles: [`
    /* General Container */
    .container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      font-family: Arial, sans-serif; /* Default font */
    }

    /* Header Styling */
    header {
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
    }

    /* Main Content Area Styling */
    main {
      flex: 1;
      padding: 20px;
      background-color: #f4f4f9;
      color: #333;
      font-family: Georgia, serif; /* Third font style */
    }

    /* Footer Styling */
    footer {
      background-color: #333;
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
    }
  `]
})
export class AppComponent {
  title = 'rpg-character-builder';
}
