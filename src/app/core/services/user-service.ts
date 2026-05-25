import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class UserService {

  UserList: any = [{
    Id :1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 30,
    address: '123 Main St, Anytown, USA'
  },
  {
    Id :2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    age: 25,
    address: '456 Oak Ave, Somewhere, USA'
  }];

  getUser() {
      return this.UserList;
  }

  addUser(data: any) {
    this.UserList.push(data);
  }

}
