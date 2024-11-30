import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <header>
      <h1>{{ title }}</h1>
    

      <nav class="navbar">
        <ul>
          <li><a routerLink="/home" routerLinkActive="active">Home</a></li>
          <li><a routerLink="/players" routerLinkActive="active">Players</a></li>
          <li><a routerLink="/signin" routerLinkActive="active">Sign In</a></li>
          <li><a routerLink="/create-character" routerLinkActive="active">Create Character</a></li>
          <li><a routerLink="/create-guild" routerLinkActive="active">Create Guild</a></li>
          <li><a routerLink="/character-faction" routerLinkActive="active">Character Faction</a></li>
        </ul>
      </nav>
    </header>

    <div class="sign-in-container">
      <div *ngIf="email; else signinLink">
        <p>Welcome, {{ email }}!</p>
        <button (click)="signout()">Sign Out</button>
      </div>
      <ng-template #signinLink>
        <a routerLink="/signin" class="sign-in-link">Sign In</a>
      </ng-template>
    </div>

    <main class="main-content">
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>

    <footer>
      <nav>
        <ul>
          <li><a routerLink="/home" routerLinkActive="active">Home</a></li>
          <li><a routerLink="/players" routerLinkActive="active">Players</a></li>
          <li><a routerLink="/signin" routerLinkActive="active">Sign In</a></li>
          <li><a routerLink="/create-character" routerLinkActive="active">Create Character</a></li>
          <li><a routerLink="/create-guild" routerLinkActive="active">Create Guild</a></li>
          <li><a routerLink="/character-faction" routerLinkActive="active">Character Faction</a></li>
        </ul>
      </nav>
      <p>&copy; 2024 RPG Character Builder. All rights reserved.</p>
    </footer>
  `,
  styles: [`
    body {
      font-family: 'Roboto', sans-serif;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      background-color: #f4f4f4;
      color: #333;
    }

    header, footer {
      background-color: #333;
      color: white;
      padding: 1rem;
    }

    .navbar ul {
      list-style: none;
      display: flex;
      justify-content: space-around;
      padding: 0;
      margin: 0;
    }

    .navbar ul li {
      margin: 0 1rem;
    }

    .navbar ul li a {
      text-decoration: none;
      color: white;
      font-size: 1.1rem;
      transition: color 0.3s;
    }

    .navbar ul li a:hover {
      color: #00bcd4;
    }

    .main-content {
      padding: 2rem;
      min-height: 80vh;
    }

    .content {
      background-color: #ffffff;
      padding: 2rem;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
    }

    footer ul {
      list-style: none;
      display: flex;
      justify-content: center;
      padding: 0;
      margin: 0;
    }

    footer ul li a {
      text-decoration: none;
      color: white;
      font-size: 1rem;
      transition: color 0.3s;
    }

    footer ul li a:hover {
      color: #00bcd4;
    }

    footer p {
      margin-top: 1rem;
      font-size: 0.9rem;
      font-family: 'Arial', sans-serif;
    }

    /* Active link style */
    .active {
      color: #00bcd4;
    }

    .sign-in-container {
      text-align: center;
      margin-top: 20px;
    }

    .sign-in-link {
      font-size: 1.2rem;
      color: #00bcd4;
      text-decoration: none;
    }

    .sign-in-link:hover {
      text-decoration: underline;
    }

    button {
      padding: 10px 20px;
      background-color: #f44336;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
    }

    button:hover {
      background-color: #d32f2f;
    }
  `]
})
export class AppComponent {
  title='rpg-character-builder';
  email?: string;
  constructor(private authService: AuthService, private cookieService:
 CookieService) {
  }
  ngOnInit() {
  this.authService.getAuthState().subscribe((isAuth) => {
  if (isAuth) {
  this.email = this.cookieService.get('session_user');
  }
  });
  }
  signout() {
  this.authService.signout();
  }
 }

