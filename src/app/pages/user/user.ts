import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../core/services/user-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [ReactiveFormsModule ],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  constructor(private userService: UserService, private router: Router) { }

  UserFormDetails = new FormGroup({
    Id: new FormControl(),
    name: new FormControl(),
    email: new FormControl(),
    age: new FormControl(),
    address: new FormControl()
  })

  onSubmit() {
    const user = this.userService.getUser();
    const lastUser = user[user.length - 1];
    const newId = lastUser ? lastUser.Id + 1 : 1;
    const formData = this.UserFormDetails.getRawValue();
    formData.Id = newId;
    this.userService.addUser(formData);
    this.router.navigate(['/users']);
    }




}
