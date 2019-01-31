import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() submitUser = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {
  }

  public onSubmit(first: HTMLInputElement, last: HTMLInputElement) {
    const user = new User(first.value, last.value);
    first.value = '';
    last.value = '';
    this.submitUser.emit(user);
  }

}
