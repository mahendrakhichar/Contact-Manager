import { Injectable } from '@angular/core';
import { Person } from './person.model';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private people: Person[] = [
    { id: 1, name: 'Mahendra Khichar', age: 20 },
    { id: 2, name: 'Ninja', age: 25 },
    { id: 3, name: 'Techno MK', age: 35 },
  ];

  // Get all people
  getPeople(): Person[] {
    return this.people;
  }

  // Get a person by ID
  getPersonById(id: number): Person | undefined {
    return this.people.find((person) => person.id === id);
  }

  // Update a person's details
  updatePerson(id: number, data: Partial<Person>): void {
    const person = this.getPersonById(id);
    if (person) {
      Object.assign(person, data); // Merge new data with existing person
    }
  }

  // Delete a person by ID
  deletePerson(id: number): void {
    this.people = this.people.filter((person) => person.id !== id);
  }
}
