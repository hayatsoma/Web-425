import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CreateCharacterComponent } from './create-character.component';

describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCharacterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should generate a random character ID between 1 and 1000 with no decimals', () => {
    const randomId = component.generateRandomId();
    expect(randomId).toBeGreaterThan(0);
    expect(randomId).toBeLessThanOrEqual(1001);
    expect(Number.isInteger(randomId)).toBeTrue();
  });
  it('should add a character with correct customization', () => {
    component.name = 'John';
    component.gender = 'Male';
    component.charClass = 'Warrior';
    component.addCharacter();

    const newCharacter = component.characters[0];
    expect(newCharacter.name).toEqual('John');
    expect(newCharacter.gender).toEqual('Male');
    expect(newCharacter.class).toEqual('Warrior');
    expect(newCharacter.id).toBeGreaterThan(0);
    expect(newCharacter.id).toBeLessThanOrEqual(1000);
  });
  it('should reset all form fields to their default values after resetForm is called', () => {
    component.name = 'John';
    component.gender = 'Male';
    component.charClass = 'Warrior';
    component.resetForm({ reset: () => {} });

    expect(component.name).toEqual('');
    expect(component.gender).toEqual('');
    expect(component.charClass).toEqual('');
  });

});
