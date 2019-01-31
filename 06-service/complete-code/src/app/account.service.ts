import { Injectable } from '@angular/core';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private _account: Account;

  constructor() { }

  set account(account: Account) {
    this._account = account;
  }

  get account(): Account {
    return this._account;
  }
}
