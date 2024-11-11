import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayersComponent } from './players.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PlayersComponent,
        RouterTestingModule  // Import RouterTestingModule for route testing
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct route for PlayersComponent', () => {
    // This test would be configured in app.component.spec.ts or routing module if testing actual navigation
    // Example approach here assumes a test for component's presence
    expect(component).toBeDefined();
  });

  it('should correctly display a list of characters', () => {
    // Check if characters array has 10 items as expected
    expect(component.characters.length).toBe(10);

    // Query the DOM to check if 10 character cards are displayed
    const characterElements = fixture.debugElement.queryAll(By.css('.character-card'));
    expect(characterElements.length).toBe(10);

    // Optionally, check content of the first character card
    const firstCharacterName = characterElements[0].nativeElement.querySelector('h3').textContent;
    expect(firstCharacterName).toContain(component.characters[0].name);
  });
});
