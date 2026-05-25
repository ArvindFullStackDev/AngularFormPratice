import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/user-service';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  name: string = '';
  Description: string = '';

  constructor(
    private userService: UserService,
    private router: Router
  ) {

  }

  onSave(): void {
    const newData = {
      name: this.name,
      Description: this.Description
    };

    // Add into JSON Array
    this.userService.addUser(newData);

    // Redirect to Grid
    this.router.navigate(['/']);
  }
}
