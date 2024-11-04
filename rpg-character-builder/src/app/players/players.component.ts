import { Component } from '@angular/core';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [],
  template: `
 <div>
 <h1>About Us</h1>
 <p>Here is some information about us:</p>
 <ul>
 <li>Founded in 2001</li>
 <li>Located in Anytown, USA</li>
 </ul>
 </div>
 `,

  styles: [`
    h2 {
      color: blue;
    }
  `]
})
export class PlayersComponent {}