import { Component } from '@angular/core';
import { UserService } from '../../core/services/user-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-grid',
  imports: [RouterLink],
  templateUrl: './user-grid.html',
  styleUrl: './user-grid.css',
})
export class UserGrid {
   
   UserList: any = [];


  constructor(private userService: UserService) {

      this.UserList =this.userService.getUser();
  }

}
