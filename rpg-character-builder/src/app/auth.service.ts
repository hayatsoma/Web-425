import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authState = new BehaviorSubject<boolean>(false);
  private users = [
    { email: 'test@example.com', password: 'password123' } // Sample user
  ];

  constructor(private cookieService: CookieService) {}

  // Get the current authentication state
  getAuthState() {
    return this.authState.asObservable();
  }

  // Sign in method
  signin(email: string, password: string): boolean {
    const user = this.users.find((u) => u.email === email && u.password === password);
    if (user) {
      this.authState.next(true);
      this.cookieService.set('session_user', email);
      return true;
    }
    return false;
  }

  // Sign out method
  signout() {
    this.authState.next(false);
    this.cookieService.delete('session_user');
  }
}
