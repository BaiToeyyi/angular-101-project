import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _users: User[] = [];

  constructor() { }

  get users(): User[] {
    return this._users;
  }

  public add(user: User) {
    this._users.push(user);
  }
}
