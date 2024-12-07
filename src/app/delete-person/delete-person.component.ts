import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../people.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-delete-person',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './delete-person.component.html',
  styleUrls: ['./delete-person.component.css'],
})
export class DeletePersonComponent implements OnInit {
  person: any;

  constructor(
    private route: ActivatedRoute,
    private peopleService: PeopleService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Get ID from URL
    this.person = this.peopleService.getPersonById(id);        // Fetch person by ID
  }

  deletePerson() {
    this.peopleService.deletePerson(this.person.id); // Delete the person
    this.router.navigate(['/list']);                 // Navigate back to the list page
  }
}
