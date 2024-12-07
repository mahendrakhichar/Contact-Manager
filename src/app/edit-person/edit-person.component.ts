import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../people.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-person',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css'],
})
export class EditPersonComponent implements OnInit {
  person: any;

  constructor(
    private route: ActivatedRoute,
    private peopleService: PeopleService,
    private router: Router // Import and inject Router for navigation
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Get ID from URL
    this.person = this.peopleService.getPersonById(id);        // Fetch person by ID
  }

  save() {
    this.peopleService.updatePerson(this.person.id, this.person); // Save changes
    this.router.navigate(['/list']);                              // Navigate back to the list page
  }
}
