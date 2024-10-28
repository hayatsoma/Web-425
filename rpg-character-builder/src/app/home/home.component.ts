import { Component } from '@angular/core';

@Component({
  selector: 'app-home', // The selector used to include this component in HTML
  templateUrl: './home.component.html', // Path to the HTML template
  styleUrls: ['./home.component.css'] // Path to the CSS styles (optional)
})
export class HomeComponent {
  // Define properties and methods for your component here
  title: string = 'Welcome to RPG Character Builder';
  description: string = 'Create and customize your own RPG character!';

  constructor() {
    // Any initialization logic can go here
  }

  // You can add methods that will be called from your template
  onStartBuilding() {
    console.log('Character building started!');
    // Navigate to character building page or show character options
  }
}

