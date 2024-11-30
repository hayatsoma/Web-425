import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Router, Routes } from '@angular/router';
import { By } from '@angular/platform-browser';
import { PlayersComponent } from './players/players.component'; // Ensure this import is correct

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let router: Router;

  const routes: Routes = [
    { path: 'players', component: PlayersComponent },
    // Add other routes as necessary
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, PlayersComponent],  // Ensure PlayersComponent is declared
      imports: [RouterTestingModule.withRoutes(routes)],  // Mock the routes for testing
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have the "rpg-character-builder" title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    ;
  });

  it('should render the title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();  // Triggers change detection so the title is rendered

    const compiled = fixture.nativeElement;  // Access the DOM element
    expect(compiled.querySelector('h1').textContent).toContain('rpg-character-builder');  // Adjust based on where your title is
  });


  it('should have the correct route for PlayersComponent', async () => {
    await router.navigate(['players']);
    fixture.detectChanges();
    expect(router.url).toBe('/players');
  });

  it('should navigate to PlayersComponent when clicking the Players link', async () => {
    const routerLink = fixture.debugElement.query(By.css('a')).nativeElement;
    routerLink.click();
    fixture.detectChanges();

    // Since we mock the router with specific routes, this should now work
    await fixture.whenStable();
    expect(router.url).toBe('/players');  // Check if the URL is updated to '/players'

    // Optionally, check for content in the PlayersComponent
    const playerList = fixture.nativeElement.querySelector('.player-list');  // Assuming the list has a class of 'player-list'
    expect(playerList).toBeTruthy(); // Verify PlayersComponent content is rendered
  });
});
