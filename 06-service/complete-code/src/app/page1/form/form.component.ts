import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  public onSubmit(firstName: HTMLInputElement, lastName: HTMLInputElement) {
    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const user = new User(firstNameValue, lastNameValue);
    this.userService.add(user);
    firstName.value = '';
    lastName.value = '';
  }

}
