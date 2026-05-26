import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../core/services/user-service';

@Component({
  selector: 'app-user',
  imports: [ReactiveFormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  constructor(private userService : UserService) { }

  UserFormDetails = new FormGroup({
    Id: new FormControl(),
    name: new FormControl(),
    email: new FormControl(),
    age: new FormControl(),
    address: new FormControl()
  })

    onSubmit(){
        this.userService.addUser(this.UserFormDetails.getRawValue());
    }




}
