import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateGuildComponent } from './create-guild.component'
import { By } from '@angular/platform-browser';
describe('CreateGuildComponent', () => {
 let component: CreateGuildComponent;
 let fixture: ComponentFixture<CreateGuildComponent>;
 beforeEach(async () => {
 await TestBed.configureTestingModule({
 imports: [CreateGuildComponent, ReactiveFormsModule, ]
 })
 .compileComponents();
 fixture = TestBed.createComponent(CreateGuildComponent);
 component = fixture.componentInstance;
 fixture.detectChanges();
 });
 it('should create the form with all controls', () => {
  expect(component.guildForm.contains('guildName')).toBeTruthy();
  expect(component.guildForm.contains('description')).toBeTruthy();
  expect(component.guildForm.contains('type')).toBeTruthy();
});

it('should require all fields', () => {
  const guildName = component.guildForm.get('guildName');
  guildName?.setValue('');
  expect(guildName?.valid).toBeFalse();
});

it('should prevent form submission when invalid', () => {
  spyOn(component, 'onSubmit');
  component.guildForm.setValue({
    guildName: '',
    description: '',
    type: '',
    notificationPreference: '',
    acceptTerms: false
  });
  fixture.debugElement.nativeElement.querySelector('button').click();
  expect(component.onSubmit).not.toHaveBeenCalled();
});
});
