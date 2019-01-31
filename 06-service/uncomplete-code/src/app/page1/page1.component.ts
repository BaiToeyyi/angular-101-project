import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  public users: User[] = [];

  constructor() { }

  ngOnInit() {
  }

  onSubmitUser(user: User) {
    // console.log(user);
    this.users = this.users.concat(user);
  }

}
