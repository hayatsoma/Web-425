@NgModule({
  declarations: [
    AppComponent,
    CreateCharacterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,  // <-- Add FormsModule here for ngModel to work
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
