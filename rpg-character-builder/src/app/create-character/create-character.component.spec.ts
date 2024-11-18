import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateCharacterComponent } from './create-character.component';

describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCharacterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test for generating a random character ID
  it('should generate a random character ID between 1 and 1000 with no decimal places', () => {
    component.createCharacter(); // Trigger the generation of a new character ID
    expect(component.character.id).toBeGreaterThan(0);
    expect(component.character.id).toBeLessThanOrEqual(1000);
    expect(Number.isInteger(component.character.id)).toBe(true);
  });

  // Test for adding a character with correct customization
  it('should add a character with correct customization', () => {
    component.characterName = 'Hero1';
    component.characterClass = 'Warrior';
    component.characterGender = 'Male';
    component.customizeCharacter('Sword', true, false);

    component.createCharacter();
    const addedCharacter = component.character;

    expect(addedCharacter.name).toBe('Hero1');
    expect(addedCharacter.class).toBe('Warrior');
    expect(addedCharacter.gender).toBe('Male');
    expect(addedCharacter.customization.weapon).toBe('Sword');
    expect(addedCharacter.customization.magic).toBe(true);
    expect(addedCharacter.customization.shield).toBe(false);
  });

  // Test for calculating total stats correctly (e.g., strength, agility)
  it('should calculate total stats correctly for the character', () => {
    component.character.strength = 10;
    component.character.agility = 5;
    component.character.intelligence = 8;

    const totalStats = component.getTotalStats();
    expect(totalStats).toBe(23); // Strength + Agility + Intelligence
  });

  // Test for resetting form fields
  it('should reset all form fields to their default values after resetForm is called', () => {
    component.characterName = 'Hero2';
    component.characterClass = 'Mage';
    component.characterGender = 'Female';
    component.customization.weapon = 'Staff';
    component.customization.magic = true;

    component.resetForm();

    expect(component.characterName).toBe('');
    expect(component.characterClass).toBe('');
    expect(component.characterGender).toBe('');
    expect(component.customization.weapon).toBe('');
    expect(component.customization.magic).toBe(false);
    expect(component.customization.shield).toBe(false);
  });
});
