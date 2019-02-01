import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public _users: User[] = [];

  constructor() {
    for (let i = 0; i < 10; i++) {
      this._users.push(new User(i, `first${i}`, `last${i}`));
    }
  }

  get users() {
    return this._users;
  }

  public userById(id: number): User {
    return this._users.filter(u => u.id === id)[0];
  }
}
