export class CreateCharacterComponent {
  newCharacter = {
    name: '',
    gender: '',
    class: '', // <-- Change from 'characterClass' to 'class'
  };

  addCharacter() {
    console.log(this.newCharacter);
  }

  resetForm(form: any) {
    form.reset();
  }
}

