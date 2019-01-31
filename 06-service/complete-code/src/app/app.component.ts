import { Component } from '@angular/core';
import { AccountService } from './account.service';
import { Account } from './account';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private accountService: AccountService
  ) {
    this.accountService.account = new Account('Hello Boyis');
  }
}
