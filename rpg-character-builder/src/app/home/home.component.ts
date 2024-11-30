import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
  <div class="home-container">
    <header class="hero-section">
      <img src="assets/banner.jpg" alt="Hero Banner" class="hero-image">
      <div class="hero-text">
        <h1>Welcome to RPG Character Builder</h1>
        <p>Embark on an exciting journey to create and customize unique characters for your RPG adventures. Explore, design, and bring your imagination to life!</p>
      </div>
    </header>

    <section class="features">
      <h2>Why Choose Our RPG Character Builder?</h2>
      <div class="feature-grid">
        <div class="feature-item">
          <img src="assets/Customize.jpg" alt="Customization">
          <h3>Endless Customization</h3>
          <p>With a wide range of options for classes, factions, and appearances, your character can be as unique as your imagination.</p>
        </div>

        <div class="feature-item">
          <img src="assets/story.jpg" alt="Storytelling">
          <h3>Interactive Storytelling</h3>
          <p>Our platform integrates storytelling elements, helping you immerse deeper into your character's journey.</p>
        </div>

        <div class="feature-item">
          <img src="assets/community.jpg" alt="Community">
          <h3>Thriving Community</h3>
          <p>Join a passionate community of gamers and creators. Share your builds, discuss strategies, and collaborate on epic adventures.</p>
        </div>
      </div>
    </section>

    <footer class="cta-section">
      <h2>Start Building Today!</h2>
      <p>Whether you're a seasoned RPG player or a newcomer, our platform is designed to fuel your creativity and make character creation fun and easy.</p>
      <button class="get-started-btn">Get Started Now</button>
    </footer>
  </div>
`,
styles: [`
  .home-container {
    text-align: center;
    padding: 1rem;
    font-family: 'Verdana', sans-serif;
  }

  .hero-section {
    position: relative;
  }

  .hero-image {
    width: 100%;
    height: auto;
  }

  .hero-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  }

  .features {
    background-color: #f4f4f4;
    padding: 2rem 0;
  }

  .feature-grid {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .feature-item {
    max-width: 300px;
    margin: 1rem;
    text-align: left;
  }

  .feature-item img {
    width: 100%;
    border-radius: 8px;
  }

  .cta-section {
    background-color: #333;
    color: white;
    padding: 2rem 0;
  }

  .get-started-btn {
    background-color: #00bcd4;
    color: white;
    padding: 1rem 2rem;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    margin-top: 1rem;
    border-radius: 8px;
  }

  .get-started-btn:hover {
    background-color: #008c9e;
  }
`]
})
export class HomeComponent {}
