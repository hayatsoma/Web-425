import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayersComponent } from './players.component';

describe('PlayersComponent', () => {
  let fixture: ComponentFixture<PlayersComponent>;
  let component: PlayersComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayersComponent],  // Import the standalone PlayersComponent here
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should display the correct number of characters', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.player').length).toBe(10);  // Adjust as needed for your data
  });
});
