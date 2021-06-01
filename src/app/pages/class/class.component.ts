import { Component } from '@angular/core';
import { person } from 'src/app/models/Person'
@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})

export class ClassComponent {
  public constructor () {
    this.persons = new person();
    
    this.persons.id = '1';
    this.persons.name = 'amir';
    this.persons.age = 18;
  }
  public persons : person;
}
