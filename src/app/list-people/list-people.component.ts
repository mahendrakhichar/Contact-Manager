import { Component } from '@angular/core';
import { PeopleService } from '../people.service';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterModule } from '@angular/router';
import { Person } from '../person.model'; 

@Component({
  selector: 'app-list-people',
  standalone: true,
  imports: [CommonModule, RouterModule], // Add CommonModule
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css'],
})
export class ListPeopleComponent {
  people: Person[] = [];

  constructor(private peopleService: PeopleService) {
    this.people = this.peopleService.getPeople();
  }
}
