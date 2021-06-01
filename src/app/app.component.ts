import { Component } from '@angular/core';
import { person } from './models/Person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  public constructor () {
    this.persons = new person();
    
    this.persons.id = '1';
    this.persons.name = 'amir';
    this.persons.age = 18;
  }
  public persons : person;
}